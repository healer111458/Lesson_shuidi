 - web 和 桌面（单机）应用 最大的区别？
   localhost：1234   n个人都可以输入 n一定有一个上限
      并发请求
      独立的分配给每个用户一个线程，fs 读取一个文件  index.html
      I/O 吃紧  300个左右的上限并发请求  需要考虑物理的设备机制
      解决方案：
          多加机器  物理设备可以并联 
          ngnix（负载均衡）  可以分析那些机器是空闲的，把用户送到这台机器的IP地址
      充分发挥每台机器的性能：多核

      1234 => node的进程  => 只是一个进程  只运行在一个CPU上
      把CPU都用上，