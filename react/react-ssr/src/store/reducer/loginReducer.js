import { LOGIN_STATUS } from '../constants';

let isLogin = null;

export default (state = isLogin, action) => {
  switch(action.type) {
    case LOGIN_STATUS:
      return action.isLogin;
    default:
      return state;
  }
}