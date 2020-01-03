const Koa = require('koa');   
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');   //访问记录
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
//中间件式
//分层
const index = require('./routes/index')
const fs = require('fs');
// app.use(ctx => {
//   ctx.body = fs.createReadStream('asdf');
// })
onerror(app);
app.use(bodyparser({
  enableTypes:['json','form','text']   //返回类型
}))
app.use(require('koa-static')(__dirname +'/public'));
app.use(views(__dirname + '/views',{
    extension: 'pug'
}));
app.use(logger());
app.use(index.routes(),index.allowedMethods());
// 模块化语句 COMMONJS  
module.exports =app;    //向外输出app