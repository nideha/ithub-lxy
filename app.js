// 先响应一个hello world，确保服务器没问题
const express=require('express');
// 把路由模块加载进来 1
const router=require('./router');
const app=express();
// 把路由模块加载进来 2
app.use(router);

app.listen(3000,()=>console.log('running...'))