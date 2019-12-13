//单点入口
const Koa = require('koa');
const config = require('./config/defult.js');
const app = new Koa();
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js');
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
app.use(
    views(
      path.join(__dirname,'./views'),{
      extension:'ejs'
})
);
//use?  应答模式 矿泉水  中间件是处理应用请求的核心
//启用路由中间件  
app.use(postRouter.routes());
app.use(signinRouter.routes());
console.log(`listening on port ${config.port}`);
app.listen(config.port);