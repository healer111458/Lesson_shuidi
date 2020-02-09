// web Worker  计算hash  新创建线程  独立运行 优化前端体验
const http = require('http');
const fork = require('child_process').fork; //创建新的进程


http.createServer((req, res) => {
  const compute = fork('./fork_compute.js');  //创建一个子进程
  // const sum = longComputation();
  // res.end('hello');
  compute.send('开启一个新的进程！');
  compute.on('message',sum => {
    res.end(`sum 为${sum}`);
  })
}).listen(1213,() => {
  console.log(process.pid)
});
