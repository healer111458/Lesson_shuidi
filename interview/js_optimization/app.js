var http = require('http');

http.createServer((req,res) => {
    if(req.url == '/new_page_not_go') {
        res.writeHead(204); // 
        return
    }
// 三次握手
    //     seq x
//     ack 
//                         ack = x+1
//                         seq = y
//     ack = y + 1

    res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'})
    res.write("hello world");
    res.end(`
    <html>
    <body></body>
    </html>
    `)
})