# express nodemon node.js web应用

	* express 安装 npm install express -S
	* nodemon 安装 在package.json中 scripts 下 添加  "start": "nodemon ./src/app.js", 运行 npm i nodemon -D
	* npm start 启动应用



	## route 介绍 和 使用 web 服务 如何处理一个请求
	 uri --> 网络--》dns解析-->目标服务器
	 	1.如何响应这个请求--> 路由//规则


			* 请求 方法区别 get post put delete
			* 通过 url --> 路径 如 www.baidu.com/a/b/c.html


	## 定义一个 api/路由 需要满足 客户端 无论使用神马请求方式 （get/post/delete/put) 都可以得到 响应
		app.all();

	## 无论 客户端 任何的 uri 服务器 都会 有响应 --> 日志


	## 使用中间件
		app.use()
		app.use((req , res)=>{})

	## 如何做路由的拆分
		member
		sku

			example : 创建 member.js 文件 在 在这中 处理 请求 
					```
					const express = require('express');

					const router = express.Router();


					const data = [{id:101,name:"张三",},{id:102,name:"李四",}]
					//router.[method] //get/post


					router.get('/list' , (req , res)=>{
						res.json({
							list:data,
						})
					});


					module.exports = router;
					```
					在 app.js 中 注册 

					```
					const memberRouter = require('./member.router.js');
					app.use('/member' , memberRouter); //member/list	
					```


	## express 中间
		* 





