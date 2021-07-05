import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './app/Reducer'
import Calculator from './features/Calculator/Calculator';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore({reducer})}>
      <Calculator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
