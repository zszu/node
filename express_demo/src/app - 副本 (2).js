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


// 加载 一个 static 的 中间件
app.use(express.static('static' , {
	//设置 后缀
	extensions:['html','htm'],
}));

function middleware(err , req, res , next){
	// 1.异常
	// 2.处理业务功能 ， 然后转交 控制权 -- next
	// 3.响应请求--结束响应-->当做路由的处理函数

}
function valid_name_middleware(req , res , next){
	let {name} = req.query;
	if(!name || !name.length){
		res.json({
			message:'缺少name参数'
		});
	}else{
		next();
	}
}

app.all('*' , valid_name_middleware)

app.get('/list' , (req , res)=>{
	res.json({
		message:'list',
	});
});


app.listen(8080  , ()=>{

})