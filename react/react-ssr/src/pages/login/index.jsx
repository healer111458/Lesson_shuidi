import React from 'react';
import { connect } from 'react-redux'
import { getLoginStatus } from '../../store/actions/loginAction'
class Login extends React.Component {
  componentDidMount() {
    if(this.props.isLogin === null) {
      // 在后端并没有 dispatch 过，
      this.props.getisLogin();
    }
  }
  render() {
    const { isLogin } = this.props;
    return (
      <div>
        Login
        { isLogin ? '登录了' : '暂未登录' }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  isLogin: state.login
})
const mapDispatchToProps = (dispatch) => {
  return {
    getisLogin() {
      dispatch(getLoginStatus)
    }
  }
}
// 页面 有可能是一个 落地页，后端通过 loadData 静态方法，ajax请求
// 也有可能是前端 js，导航过来的页面，可能服务并没有任何请求，前端 componentDidMount 也要
Login.loadData = (dispatch) => {
  console.log('login app data 运行了')
  return dispatch(getLoginStatus)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);