import React from 'react';
import { Tooltip, Toast, Popover } from 'bootstrap';

import './App.scss';

function App() {
  return (
    <div id="calculator">
      <div className="row">
        <div className="cell">
          <button id="display">
            <div>first row</div>
            <div>second row</div>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 cell">
          <button>AC</button>
        </div>
        <div className="col-3 cell">
          <button>/</button>
        </div>
        <div className="col-3 cell">
          <button>X</button>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-4 cell">
              <button>7</button>
            </div>
            <div className="col-4 cell">
              <button>8</button>
            </div>
            <div className="col-4 cell">
              <button>9</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4 cell">
              <button>4</button>
            </div>
            <div className="col-4 cell">
              <button>5</button>
            </div>
            <div className="col-4 cell">
              <button>6</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4 cell">
              <button>1</button>
            </div>
            <div className="col-4 cell">
              <button>2</button>
            </div>
            <div className="col-4 cell">
              <button>3</button>
            </div>
          </div>
          <div className="row">
            <div className="col-8 cell">
              <button>0</button>
            </div>
            <div className="col-4 cell">
              <button>.</button>
            </div>
          </div>
        </div>
        <div className="col-3 op-br cell">
          <button>-</button>

          <button>+</button>

          <button id="eval">=</button>

        </div>
      </div>

    </div>
  );
}

export default App;
