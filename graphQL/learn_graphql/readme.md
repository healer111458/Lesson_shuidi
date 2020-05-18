## graphQL
  - 从词汇 -> 话语(vue + graphQL) -> 熟练

  1. GraphQL
      url 资源接口请求地址
      文章articles -> 查看某篇文件  url='/articles/show/1'
      RESTFUL   url里不需要动词
      该url设计不科学      新url：/articles/1
      因为 RESTFUL 是后端暴露资源的解决方案
      RESTFUL 是 url 设计之美
      1. HTTP 动词
          GET/POST/DELETE/PATCH/PUT...
      2. 每一个 url 代表一种资源 /articles/1
      3. 客户端通过http动词对服务器资源进行操作，实现表现层状态转化
    
  2. 设计一个url：网上汇款，从账户1向账户2汇款520元 url？
      资源：
      资源变化：

      /transfer  动词
      eg: /account/user1/transfer/520/use2  类似 /articles/show/1

      /transaction(交易) -> website 可以是独立的模块 HTTP 1.1 
      POST 状态转化 from=user1&to=user2&amout=520.00  req的body(请求体)

  - 在近几年来 RESTFUL 被前端新的理念逐渐替换 -> GraphQL
    它让前端更好的使用及定义数据接口。可以做到不浪费数据，数据格式更加严谨。
    
    //RESTFUL 主要使用动词，受后端的控制、影响大。
    vuex -> API -> mockjs -> server  //传统RESTFUL可以完成
    vuex -> GraphQL(API) ->...
    GraphQL 让前端对数据接口拥有更大的话语权
    QL queryLanguage



    *swagger 自动生成 API 文档    Apollo