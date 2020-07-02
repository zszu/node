const express = require('express');

//是一个 express 实例

const app = express();
const userRouter = require('./router/user_router');

// 中间件完整的结构
// 1.是一个函数
// 2.err,req,res,next-->function


function log_middleware(req , res ,next){
	console.log('request come ...');
	next()
}
app.use(log_middleware);
app.use('/user' , userRouter);


app.get('/test' , (req , res)=>{
	throw new Error('测试异常');

})
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
app.use(not_fount_handler);
app.use(error_handler_middleware);
// 加载 一个 static 的 中间件
app.use(express.static('static' , {
	//设置 后缀
	extensions:['html','htm'],
}));




app.listen(8080  , ()=>{

})