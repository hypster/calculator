import React from 'react'
// import { Tooltip, Toast, Popover } from 'bootstrap';

import '../../App.scss';
import {useSelector } from 'react-redux'
import {ACButton, Button, EvalButton} from './Button'

function Calculator() {
  const { expression } = useSelector(state=>state)
  console.log(expression)
  let prev = expression.join(" ")
  return (
    <div id="calculator">
      <div className="row">
        <div className="cell">
          <button className="screen">
            <div id="top-row">{prev === '0'? " ": prev}</div>
            <div id="display">{expression[expression.length-1]}</div>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 cell">
          <ACButton id="clear">AC</ACButton>
        </div>
        <div className="col-3 cell">
          <Button id="divide">/</Button>
        </div>
        <div className="col-3 cell">
          <Button id="multiply">*</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-4 cell">
              <Button id="seven">7</Button>
            </div>
            <div className="col-4 cell">
              <Button id="eight">8</Button>
            </div>
            <div className="col-4 cell">
              <Button id="nine">9</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-4 cell">
              <Button id="four">4</Button>
            </div>
            <div className="col-4 cell">
              <Button id="five">5</Button>
            </div>
            <div className="col-4 cell">
              <Button id="six">6</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-4 cell">
              <Button id="one">1</Button>
            </div>
            <div className="col-4 cell">
              <Button id="two">2</Button>
            </div>
            <div className="col-4 cell">
              <Button id="three">3</Button>
            </div>
          </div>
          <div className="row">
            <div className="col-8 cell">
              <Button id="zero">0</Button>
            </div>

            <div className="col-4 cell">
              <Button id="decimal">.</Button>
            </div>
          </div>
        </div>
        <div className="col-3 op-br cell">
          <Button id="subtract">-</Button>

          <Button id="add">+</Button>

          <EvalButton id="equals">=</EvalButton>

        </div>
      </div>

    </div>
  );
}

export default Calculator;
