// const Koa = require('koa'),//node mvc框架
//   route = require('koa-route'),//路由  定义一个地址

//   http = require('http'),//node 内置的http协议
//   websockify = require('koa-WebSocket'),//常连接协议
//   app = websockify(new Koa());
//   //接受到客户端发送的请求
//   app.ws.use(route.all('/',ctx
//   =>{
//       ctx.websocket.on('message',message
//       =>{
//           startRequest(message,ctx)
//       })

//   }))
// //   function startRequest(message,ctx){
// //       http.get('http//api.qingyunke.com/api.php?key=free&appid=0&msg=${encodeURLComponent(message)}'),res=>
// //       {
// //           res.setEncoding('utf-8');
// //           res.on('data',chunk=>{
// //               ctx.websocket.send(JSON.parse(chunk).content)
// //           })
// //       }
// //   }


// // app.listen(3000,err=>{
// //     console.log('websocket 服务器启动在3000端口');
// // })

// function startRequest(message, ctx) {
//     http.get(`http://api.qingyunke.com/api.php?key=free&appid=0&msg=${encodeURIComponent(message)}`, res => {
//       res.setEncoding('utf-8');
//       res.on('data', chunk => {
//         ctx.websocket.send(JSON.parse(chunk).content);
//       });
//     })
//   }
//   app.listen(3000, err => {
//     console.log('websocket 服务器启动在3000端口');
//   })

// // const Koa = require ('koa'),//Node mvc框架
// // route = require('koa-route'),//路由
// // http = require('http'),//node 内置的http模块，用来实现http 协议 ,短连接协议
// // websockify = require('koa-websocket'), //socket 长连接
// // app = websockify(new Koa());  //带有长连接的

// // app.listen(3000,err=>{
// //     console.log('websocket 服务器启动在3000端口');
// // })
const Koa = require('koa'), //node mvc框架
  route = require('koa-route'), //路由
  http = require('http'), //node 内置的http模块
  websockify = require('koa-websocket'),
  app = websockify(new Koa());
  // 接受到客户端发送的请求
  app.ws.use(route.all('/', ctx => {
    ctx.websocket.on('message', message => {
      startRequest(message, ctx);
    })
  }))

function startRequest(message, ctx) {
  http.get(`http://api.qingyunke.com/api.php?key=free&appid=0&msg=${encodeURIComponent(message)}`, res => {
    res.setEncoding('utf-8');
    res.on('data', chunk => {
      ctx.websocket.send(JSON.parse(chunk).content);
    });
  })
}
app.listen(3000, err => {
  console.log('websocket 服务器启动在3000端口');
})

