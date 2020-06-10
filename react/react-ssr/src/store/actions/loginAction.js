import { LOGIN_STATUS} from '../constants'
// redux-thunk: action 是一个方法
export const getLoginStatus = (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/islogin')
  .then(res => {
    console.log('res, ...', res.data)
    // action
    dispatch({
      type: LOGIN_STATUS,
      isLogin: res.data.islogin
    })
  })
}