# mpvue-koa
#### mpvue-shop 文件是该小程序的前端项目，使用mpvue，
#### mpvue-shop-node 文件是该小程序的后端项目，使用koa2
1. 分别在 mpvue-shop 和 mpvue-shop-node 中执行 npm install

2. 在 mpvue-shop 项目中执行 npm run dev（会生成一个dist目录）, 用小程序开发者工具打开这个 dist > wx 即可看到效果

3. 在 mpvue-shop-node 项目中 更改config.js中的mysql 账号密码（user和pass改为自己的）

4. 将 mpvue-shop-node 中的 nodemysql.sql 导入到本地mysql库中

5. 在 mpvue-shop-node 项目中执行 nodemon app.js 

  
