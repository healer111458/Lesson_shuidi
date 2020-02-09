const http = require('http');
const server = http.createServer();
server.on('request',(req,res) => {
  res.setHeader('Access-Controll-Allow-Origin','*');
  res.setHeader('Access-Controll-Allow-Headers','*');
  setTimeout(() =>{
    res.end('hello');
  },1000)
});
server.listen(3333,() => {
  process.title = '程序员成长只北测试进程';
  console.log('进程id',process.pid);
})