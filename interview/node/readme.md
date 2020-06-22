1.  在用node 读了一个文件的时候， 都发生了些什么？
  3点， node 底层架构相关的
  -  
  浏览器输入URL, 发生什么？ 
  node api?   IO 处理   异步 ？  2
  fs.readFileSync fs.readFile  fs.createReadStream()... 

  表层 

  - 1. node 架构层
    v8  , babel  webpack    抽像语法树 AST 
    中间层 fs ...  -> c++ 
    2. 前端  webkit 中间层  html5 调用摄像头  文件  存储...  可以是什么？ 
    3. JS 可以用于什么应用场景， 它的架构是？
      electron   chrome -> chromium 
    4. 小程序 html -> wxml   css -> wxss  
    5. RN 

  - 2. node 底层实现架构， 
    - 上层 API 层
       调用node的API层fs核块相关功能
    - node.js Bindings    c++    对fs 模块的实现
    - node.js 底层， 基于事件机制的 node event loop stream 流操作   libuv   
      libuv 内部封装了对event loop   stream  
      v8
      c-ares  异步的DNS 请求库
      http_parser OPENSSL, zlib    
      libuv 是一个高性能、事件驱动的I/O库, 并且提供了跨平台(windows/linux)的API, 
      异步， 事件驱动的编程风格，  核心使命是提供一个event loop 定时器，基于I/O 的和其它事件的回调函数   非阻塞的网络支持， 异步文件系统访问 子进程 

      JS 是单线程的， 但是 libuv 并不是 

- 执行顺序  event loop  
  前端， 后端有区别？ 

  1. event loop  在前后端的区别
    老版本里  node 的每次执行一个宏任务时， setTimeout setInterval,会清空微任务队列
    v11.+  timer 发生改变， 跟浏器端的实现一致了  libuv 
    node 任务队列类型比较多 setInterval, setTImeouter  timer栈
    io 操作poll栈, setImmediate  check栈 
    timer栈 => poll栈 => check栈

    koa(实例) -> events -> stream -> fs/net/http(异步) libuv  

    事件驱动 +  循环事件栈
  2. 不一样的结果？  node 版本不一样
    前端及传统的node v11前， event loop 
    每次执行一个宏任务时， setTimeout setInterval,
    会去检查微任务栈