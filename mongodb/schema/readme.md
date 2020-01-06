- schema  对于数据结构的描述和定义
  - articles: 用户的文章
      mysql 关系型数据库
        user id
        article user_id
        一对多
      mongodb  NOSQL数据库
        基于文档 doc
        很灵活   不需要定义
        articles：给予一个Schema定义

- mongodb 使用 JS 语法引擎  
    mysql语句十分严格
    对碎片化数据存取十分灵活
- mongoose 连接数据库 -> 通过Schema定义数据库模型 -> Model -> 数据库物理层到面向对象的能力 -> API save()
    