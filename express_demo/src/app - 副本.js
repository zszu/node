const express = require('express');

//是一个 express 试例

const app = express();

// app.use((req , res)=>{
// 	res.json({
// 		name:"张三",
// 	})
// })

//通过 请求方法 区别
//get 请求  http://127.0.0.1:8080/name
// app.get('/name/:age' , (req , res)=>{
// 	let {age} = req.params;

// 	res.json({
// 		name:'tom',
// 		age
// 	})
// 	// res.send('tom get')
// })



// //通过uri 区别
// app.get('/user/byname' , (req , res)=>{
// 	let {name} = req.query;
// 	res.json({
// 		name
// 	})
// });
// app.get('/user/byid' , (req , res)=>{
// 	let {id} = req.query;
// 	res.json({
// 		id
// 	})
// });
// app.all('/name' , (req , res)=>{
// 	// let url = req.url;
// 	res.json({
// 		message:'hello express route ',
// 		method:req.method,
// 	})
// });
// 

// app.all('*' , (req , res)=>{
// 	// let url = req.url;
// 	res.json({
// 		message:'hello express route ',
// 		method:req.method,
// 		uri:req.path,
// 	})
// });
// app.use((req , res)=>{
// 	// let url = req.url;
// 	res.json({
// 		message:'hello express route ',
// 		method:req.method,
// 		uri:req.path,
// 	})
// });

app.listen(8080  , ()=>{
	// console.log('server 启动成功');
})