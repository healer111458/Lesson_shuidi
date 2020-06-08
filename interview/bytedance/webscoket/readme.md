- http -> switch protocol tcp 连接不关闭
  服务器端可以推送数据到客户端
  wss：http https

  短轮询 -> 长轮询 -> websocket

- websocket解决的问题：浏览器端越来越向传统的客户端迈进
  
  web im：实时通讯

  1. 二维码扫描问题：短轮询
     缺点：主要在PC端
        - 延迟高
        - http资源消耗大
        - 影响性能
          eg：
          setInterval(() => {
            设置时间长会错过一些数据，不同步
            时间短会加大请求资源的消耗
          },3000)  
  2. 长轮询

  3. websocket


  