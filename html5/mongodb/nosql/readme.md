 - NOSQL
   MYSQL 关系型数据库，
   datebase->table->fields
   NOSQL 不需要sql语句
   JSON object｛｝.save()
   find({}) 文档型数据库
   碎片化的，结构性并不是很好的数据库
   Mongodb和云开发数据库->就是线上版的Mongodb

 -    MYSQL            Mongodb
   关系型数据库       NOSQL型数据库   Ex:FaceBook(文档型)
  - 语法
    showdatabase;    show dbs;
    use db;          use db;
    tables;          collections;
    SQL语句          js 语法的面向对象API

 - 连接数据库mongodb
   给予url  使用monggodb:// 协议
 - db.createCollection('site',function(err,res){
     //err 容易出错
     //异步执行->耗时的
         js 中执行的代码不会阻塞
         db.close();
 })
    代码顺序
      1.createCllection()
      2.db.close()  在外
   执行顺序
      1.create -> 进入mongodb -> create -> 回来跟我说
      2.接着执行下面的代码

 - 数据库，后端开发框架
   express 
   node,后端就是一个app
   app.get('/',(req,res)=>res.send('hello,world'))
   app.listen(3000,)