# 深入理解Ndoe.js中的进程与线程

- 前端的角度  来看待进程与线程
- node 进程  子进程 cluster 多核CPU的利用 GO语言
- pm2 线上node 运行进程管理服务
- docker 容器
- k8s 容器编排技术

1. 从前端角度开始
   Node.js 是单线程吗？js 运行在服务器端
     
       
     JS 是单线程语言  .html .css .js .vue .jsx node koa
     java 主线程  开辟新的线程概念
     基于事件机制event loop 回调 另一个角度解决了性能问题
     新的线程创建出来的：ajax 单线程
      ajax 微软公司
       js是单线程的，但js所在的宿主就是浏览器(容器), 多进程(http并发  img css html js),多线程
       注册在主线程 event事件中
       线程间可以相互通信不是单线程
2. node 当前main.js  就启动了 [进程 = process] pid是进程号 
   服务器端就是多线程，分布式
   js 在服务器端执行  是单线程执行
   node是服务器端js执行的容器  node 是多进程的，多线程的
      node 10.  多线程
   单线程：异步实现 IO 高性能高并发

   js 语言单线程，但运行的容器（浏览器）是多进程，多线程
   node.js 的容器是Node 异步无阻塞  高并发  创建进程、线程

   - 创建进程的两种方式：API
      child_process fork()  类似web worker
      cluster fork
      目的都是提高运行效率，把CPU发挥起来
      类似nginx 负载均衡