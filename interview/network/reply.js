var http = require('http');

http.createServer(function(req,res){
    // 一份代码，满足后端两种需求
    // 1. axios  proxy /api/posts 前后端分离  mvvm 响应头  text/json
    // 2. 传统的后端驱动型开发 html mysql + 套页面 mvc   text/html
    // 后端视角
    // mysql 取出来的
    // 数据业务得以复用
    let posts = [{
        id: '5eb9e6b751882560d56d73bb',
        title: '我在阿里是怎么工作的'
    },{
        id: '5eb95c53e51d454d94536074',
        title: 'Web 性能指标'
    },{
        id: '5ebb5c1ee51d454ddb0b4e1d',
        title: '理解协程、LiveData 和 Flow'
    }]
    if(req.url === '/posts') { //url
        // req + res
        if(req.headers['content-type'] === 'text/json') {   //头部
        // api 灵活性强
        // vue/react中
        
        res.end(JSON.stringify(posts));
        }else {
            //后端自己建立站    mvc模型
            let postHTML = posts.map(post => `
            <li>
              ${post.id} ${post.title}
            </li>
            `).join('')
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
            res.end(`
            <html >
            <head></head>
            <body>
              <ul>
              ${postHTML}
              </ul>
            </body>
            </html>`)
        }
    }
    res.end('hello world')
}).listen(1234);