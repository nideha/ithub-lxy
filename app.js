// 先响应一个hello world，确保服务器没问题
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send('hello world')
});
app.listen(3000,()=>console.log('running...'))