import { useDispatch } from 'react-redux'
import React from 'react'

export function Button({children, id}) {
  const dispatch = useDispatch()
  return (
    <button id={id} onClick={() => {
      dispatch({
        type: 'UPDATE_INPUT',
        value: children
      })

    }
    }>{children}</button>
  )
}

export function ACButton({children, id}) {
  const dispatch = useDispatch()
  return (
    <button id={id} onClick={() => {
      dispatch({
        type: 'CLEAR_INPUT'
      })
    }
    }>{children}</button>
  )
}

export function EvalButton({children, id}) {
  const dispatch = useDispatch()
  return (
    <button id={id} onClick={() => {
      dispatch({
        type: 'EVAL_EXPRESSION'
      })
    }
    }>{children}</button>
  )
}