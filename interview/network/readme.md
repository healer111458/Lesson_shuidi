- web 交互数据格式是什么？ 有没有方法在用户请求时提供多种数据返回格式的选择？
    ajax json / html
    传统的浏览器  text/html
    动态web ajax text/json
- 计算机网络：历史化
  1. 为什么http createServer callback req + res 表达出来
    浏览器 n 和服务器 1 之间的通信  php/node HTTP协议
    HTTP协议是构建于TCP/IP协议之上的  网咯应用层协议
    HTTP/0.9 1991 学术交流 网络之间传输HTML 超文本内容
    请求响应模式
    TCP 安全连接管道
    简单协议API化
    - HTTP 基于TCP 客户端 IP地址（dns domain）  一个端口对应一个应用
      三次握手 建立起来连接
      dns 递归的查找过程
      浏览器缓存 -> host 文件 -> 营运商 ->...-> 美国
      - 三次握手
        双方都有req res 数据包的能力 ack(发送一个请求) syn
        1. browser syn(seq + j) SYN_SET 状态 同步序列号
        2. ack = j + 1 发送给你 发soon过一个自己的 seq = k
        3. browser establised 状态 ack = k + 1

      - 四次挥手 断开连接  1 ：n
         发送完请求后
         1. 主机 A 通知 TCP 发送完成    主机B  FIN 报文
         2. 主机 B 接受到 不会立即用FIN 报文回复主机 A ,而是向主机 A 发送一个 ack， 同时通知自己响应的应用程序， (防止主机 A 多次发送FIN 报文)
         3. TCP 向主机 A 发送 FIN 报文
         4. 主机 A 接收 FIN 报文 主机 B 接收 ack，同时代表着 TCP 连接池底释放
         请求行 GET   /posts还没有
         0.9版本中连请求头请求体都没有   连接a html 文本
    HTTP1.0版本
    微软 IE
      1994年  支持多文件下载
      text/html 0.9 image/png text/css text/js
      accept：text/html
      accept-encoding:gzip
      accept-language:utf-8
      acept-language:zh_CN
      请求体 POST
      状态码 反应请求成功与否
      Cache 机制    Last Modify 从浏览器端读取缓存文件
      userAgent 有什么用 ：判断用户的浏览器类型
        在业务开发中中：
          - 通过之歌标识，用户所访问的网站可以显示不同的排版从而为用户提供更好的体验或者进行信息统计 PC/mobile
          iphone/android 手机网站
          - **logs日志处理 阿里下单的 30% iphone 用户花了 70% 的钱
    HTTP1.1版本
      

  2. 在那个HTTP版本中支持 png的解析
  3. 雪碧图 http 请求， 合并到一张背景图上， 前端性能优化技术，为什么现在不考？ 哪个http版本里被取消
  4. userAgent 在哪个版本出现
  5. 那个版本极大的提升了下载速度
