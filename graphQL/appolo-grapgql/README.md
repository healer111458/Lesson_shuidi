- 前端层 graphql -> 介入 API 开发，取代restful 
- 可以有前端来定义接口需求 来自 facebook 开源项目

- react + graphql 实战项目 提升接口质量
    name:'appolo-graphql'

    mounted axios 请求的时候发送过去
    服务器端  数据库中取数据  GraphQLHTTP  /graphql  精准传输数据
    server API 为各条业务线提供API服务时，
    1 -> n 
    react 中如何提供graphql 也就是数据

  - GraphQL 考点 
    输入一个 url 后发生什么
        1. URL 设计  传统 Restful 
        web网站的本质 一切皆资源 用名词来表达 url 
        名词 + HTTP动词 Restful 可以抽象的表达网站向用户提供一切资源的抽象，但前后端的接口在接口文档(swagger egg.js)下并不能让前端操作数据，从而有可能会出错，而 GraphQL 可以让前端来定义接口，让接口传输数据更加精准、流畅。