import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import balanceReducer from "./reducers/balanceReducer";
import loanReducer from './reducers/loanReducer';

import thunk from 'redux-thunk';

const store = createStore(combineReducers({
  balanceReducer, loanReducer
}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
