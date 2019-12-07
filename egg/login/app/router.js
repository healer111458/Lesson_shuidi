'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router -> url ->controller 
  // 网站要有很多个模块 /register ?  /login/register
  // 注册 req res 控制器层
  router.post('/login/register', controller.login.register);
  // 登录 post 请求login
  router.post('/login', controller.login.loginIn )
};
