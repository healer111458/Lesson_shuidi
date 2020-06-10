import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// redux-sage dva 支付宝
import reducer from './reducer/index';
import clientRequest from '../client/request';

// 既可以
export const getClientStore = () => {
  // 给我们 thunk 函数 会携带额外的参数
  let defaultState = {};
  if (typeof window === 'object' && window.appData) {
    defaultState = window.appData
  }
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
}