// 加载express
const express=require('express');
// 调用express.Router()创建一个路由实例
const router=express.Router();
// 加载模块
const index=require('./controllers/index');
const topic=require('./controllers/topic');
const user=require('./controllers/user');
// 配置路由规则
// 首页路由
router
  .get('/',index.showIndex)

// 用户路由
router
  // 渲染页面
  .get('/signin',user.showSignin)
  // 处理请求
  .post('/signin',user.signin)
  // 渲染页面
  .get('/signup',user.showSignup)
  // 处理请求
  .post('/signup',user.signup)
  // 处理请求
  .post('/signout',user.signout)

// 话题路由
router
  // 渲染页面
  .get('/topic/create',topic.showCreate)
  // 处理请求
  .post('/topic/create',topic.create)
  // 渲染页面
  .get('/topic/:topicID',topic.show)
  // 渲染页面
  .get('/topic/:topicID/edit',topic.showEdit)
  // 处理请求
  .post('/topic/:topicID/edit',topic.edit)
  // 处理请求
  .post('/topic/:topicID/delete',topic.delete)


// 导出路由对象
module.exports=router;
// 在app.js中通过app.use(路由对象)挂载使之生效