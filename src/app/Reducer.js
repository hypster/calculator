const defaultState = {
  expression: ["0"]
}

let num = /-?\d+/
let operator = /[+*/-]/

const evalExpression = (state, action) => {
  const {expression} = state
  try {
    let res = eval(expression.join(" "))
    if (res < 0){
      return ['-', Math.abs(res).toString()]
    } else if (res === 0){
      return defaultState
    }
    return [res.toString()]
  } catch (e) {
    return defaultState
  }
}


const getNewInput = (state, action) => {
  const {expression} = state
  let currentKey = action.value

  let prev = expression[expression.length-1] // previous expres
  let newExp = []

  if (!operator.test(prev)) { // prev was number
    if(!isNaN(prev + currentKey)) { //new number
      let newNum = prev + currentKey
      if (num.test(newNum) && newNum[0] === '0') { // remove leading zero
        newNum = newNum.slice(1)
      }
      newExp = expression.slice(0,-1).concat(newNum)

    } else { // not new number
      if (currentKey === '.'){ //invalid input
        newExp = expression
      } else { //we insert an operator, need to expand the arr
        if(prev === '0'){ //if at the beginning, we remove the 0
          newExp = expression.slice(0,-1).concat(currentKey)
        } else{
          newExp = expression.concat(currentKey)
        }

      }

    }
  } else { //prev was operator
    newExp = expression.concat(currentKey) // expand first
  }

  while(newExp.length >= 2) { //two operators in a row are not allowed except for the case when the last and last one is -
    let a = newExp[newExp.length-2]
    let b = newExp[newExp.length-1]
    if ((operator.test(a) && ['+','/','*'].indexOf(b) !== -1) ||
      (a === '-' && b === '-')){
      newExp = newExp.slice(0,-2).concat(b) //remove the last operator before insert the new one
    } else {
      break
    }
  }

  return {expression: newExp}

}


const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return Object.assign({}, state, getNewInput(state, action))
    case "CLEAR_INPUT":
      return {...defaultState}
    case "EVAL_EXPRESSION":
      return {expression: evalExpression(state, action)}
    default:
      return state
  }
}

export default reducer

