// 加载express
const express=require('express');
// 调用express.Router()创建一个路由实例
const router=express.Router();
// 配置路由规则
router.get('/',(req,res)=>{
  res.send('index page')
});
// 导出路由对象
module.exports=router;
// 在app.js中通过app.use(路由对象)挂载使之生效