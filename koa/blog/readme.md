koa 是node中轻量级开发框架

comment create table
  
  id
  name 用户名称
  content 评论内容
  moment 评论时间
  postid 文章id
  avatar 用户头像

     CREATE TABLE comment(
        id int,
        name varchar(255),
        content varchar(255),
        moment varchar(255),
        psotid int,
        avatar  varchar(255)
    )
- mvc
  routers 一个模块一个文件
  