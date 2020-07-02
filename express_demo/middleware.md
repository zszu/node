# 中间件 
	* 中间件完整的结构
 	* 1.是一个函数
	* err,req,res,next-->function
	* app 级别的使用


		* 注册的时候，一定是在最顶级
		* app.user-->api 加载进来
	2.router 级别
		* 第一个 场景 
			```
			router.use(function (req , res,next) {
				console.log('log from router');
				next();
			})
			route
			```
		* 第二个 场景 路由内部使用  
			```
			router.get('/list' , [/** middleware* 可以 添加 多个 中间 件/] ,(req , res)=>{
				res.json({
					message:'user router',
				})
			});
			```


	3.异常处理-->app 级别 --> router
		* 异常捕获 
			throw new Error()
		* Express 内置异常处理
			使用 中间件 方式 处理 
			在 整个 应用 最后 面 注册 
		* 自定义 异常处理

		```
		function demo_middleware(req ,res ,next){
			try{

				//mysql 操作
			}catch(error){
				next(error);
			}

			// Promise.then().catch(next)

		}

		// tips: 异常处理 一定是 收口的。

		//异常 处理 函数
		function error_handler_middleware(err , req ,res ,next){
			if(err){
				let {message} = err;
				res.status(500); 
				res.json({
					message:`${message || '服务器异常'}`,
				})
			}else{
				next();
			}
		}

		function not_fount_handler(req , res , next){
			res.json({
				message:'api 不存在',
			})
		}
		```

	4. mysql --> 结构化数据库 中 的一种 --> 服务 ，提供了数据存放的服务
		 数据库 字符集 utf8mb4 排序规则 utf8mb4_croatian_ci
		* 数据库： 划分的存储区域
		* table:
			js对象数组
			[
				{id；1,name:'计算机编程'},
				{id:2,'name':'c++'},
			]
	5. sequelize 介绍和使用
		安装 npm i sequelize   初始化 npx sequelize-cli init 在应用中 会生成 config migrations models seeders 文件夹

		* 什么是 ORM
		* Sequelize 作用
		* 在node.js 应用中集成 Sequelize