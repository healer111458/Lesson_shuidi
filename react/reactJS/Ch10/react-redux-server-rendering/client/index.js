import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CounterContainer from '../common/containers/CounterContainer';
import configureStore from '../common/store/configureStore'
import { fromJS } from 'immutable';

// get initial state from server side
const initialState = window.__PRELOADED_STATE__;

// use initial state to create store and pass to provider
const store = configureStore(fromJS(initialState))

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('app')
);

