// - web 服务器
var mysql = require('mysql');
const http = require('http');//node 内置模块
const fs = require('fs');

const server = http.createServer((req,res) => {
    //www.baidu.com -> req  网友
    //res html http协议来完成

    //res.end('hello world');
    if(req.url =='/'){
       fs.createReadStream('./index.html').pipe(res);  
    }
    else if(req.url == '/students'){
        connection.query('SELECT * FROM students',function(error,results,fields){
            if(error){
                console.log(error);
                return;
            }
            console.log(results); 
             const data=results;
             res.writeHead(200,{'Content-Type':'text/json;charset:UTF8'})
             res.end(JSON.stringify(data))
      
        })
        // const data=[{

        //     name:'兰锦荣',
        // }];
       
        //响应 = 响应头 +响应体
        

    }
   
});
var connection  = mysql.createConnection({
    host:'192.168.31.128',
    user:'root',
    password:'1234567890',
    database:'batschool'


})

connection.connect();

server.listen(1314);

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
//   // The filename is simple the local directory and tacks on the requested url
//   var filename = __dirname+req.url;

//   // This line opens the file as a readable stream
//   var readStream = fs.createReadStream(filename);

//   // This will wait until we know the readable stream is actually valid before piping
//   readStream.on('open', function () {
//     // This just pipes the read stream to the response object (which goes to the client)
//     readStream.pipe(res);
//   });

//   // This catches any errors that happen while creating the readable stream (usually invalid names)
//   readStream.on('error', function(err) {
//     res.end(err);
//   });
// }).listen(8080);