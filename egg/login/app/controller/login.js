const Controller = require('egg').Controller;

class LoginController extends Controller {
async register() {
    //异步 存一条数据 
    const { ctx } = this;//ctx是一个上下文环境  连接 用户请求与响应
    const { password, username, email } = ctx.request.body;
    //service  数据存储业务 
    // ctx.body = 'hi, egg';
    //分层
    await 
    ctx.service.user.register({password, username, email});
    }
async loginIn() {
    const { ctx } = this;//ctx是一个上下文环境  连接 用户请求与响应
    // 用户名 密码   ctx = req + res
    // console.log(ctx.request.body);
    const { email, password } = ctx.request.body
    console.log(email, password);
    ctx.body = '登录成功';
}
}

module.exports = LoginController;