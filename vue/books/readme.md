#vue

- 字符串:
    正则:核心能力
    正则 /-\w/g replace function
    x.slice(1).toUpperCase
- vue 语法
  - v-model  表单数据双向绑定

- http响应
  网页中有很多http响应
  - 静态资源 耗时
    - html文件
    - 图片
    req, res  http 一来一回
    readFile  res.end(file)  setHeader 
    这里有什么问题？ 
  文件在传输过程中， 有这个必要吗？
  1. 浏览器端会缓存的， 以便下次更快的打开 请空 
  浏览器没必要发送请求 如果后端图片没有改变 ? 
  2. 服务器端的图片不会怎么变，带宽资源 没必要再次去传输
  用户修改了， 一定要通知浏览器端重新下载
  etag是服务器根据当前文件的内容， 生成一个唯一标识， 
  只要内容不变 就不重复传输的 机制 

- 如何缓存文件，省服务器的带宽，客户端直接使用浏览器缓存的文件 etag
1. 服务端器返回文件的同时， 在http响应头中带有Etag的值
  值是该文件的唯一标识， hash 
2. 浏览器再次请求文件时  request header中带有 If-None-Match: 
http协议 1.0/1.1 2.0  If-None-Match: 
  浏览器有这个缓存，直接用吗？ 问下服务器 有改不？没改我就直接用
  没改 直接用 缓存
  浏览器  req   header If-None-Match=ffff + url 

1. 304  二线公司
2. 文件缓存 
  1. 服务器端Etag  
  2. 浏览器 req if-none-match
  3. 比较 304  
  4. 浏览器直接使用本地缓存