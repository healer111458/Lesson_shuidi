1.  如何让浩哥在阿里上班？ 
  www.taobao.com   ?
  localhost  127.0.0.1 
  本地 -》 aliyun   域名

    www.taobao.com
  前端上班第一个难题  运行代码
  在本地支持www.taobao.com 

  www.taobao.com -》 ip          上淘宝 
  在本地的域名缓存中先查找   访问过 本地会缓存的
  ip 家庭住址 
  运营服务商 询问 www 域名系统 国内有   美国

  host  先来这边找找 程序员来设置
  www.taobao.com 本地 

- 如何干掉8080 ? 
  nginx 
  vue vue.config.js proxy 8080
   /api/users/crete -> proxy  <---> 3000
  
  反向代理  www.taobao.com:80  www.taobao.com default_port 80
  nginx 是高性能http服务器 
  配置下反向代理
  :80  default  不用加  www.taobao.com 默认的使用80端口提供服务
  8080 live-server 由 80端口反向代理 

- 我离肯德基有多远？
  百度地图， API  
  把自己的坐标， 店的坐标 多元 lbs 