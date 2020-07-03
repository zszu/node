const express = require('express');


const models = require('../models');
//models.User models.Sequelize models.sequelize

//是一个 express 实例

const app = express();
const userRouter = require('./router/user_router');



function log_middleware(req , res ,next){
	console.log('request come ...');
	next()
};
app.use(log_middleware);
app.use('/user' , userRouter);


app.get('/test' , (req , res)=>{
	throw new Error('测试异常');

});

// mysql 测试
app.get('/create' , async (req , res,next)=>{
	let {username} = req.query;

	// 注意， await 关键字仅仅在 async function中有效
	//promise user-->sequelize 对象
	let user = await models.User.create({
		username
	})
	console.log(user);
	res.json({
		message:'创建成功',
	});
	
});
app.get('/list' , async (req , res)=>{
	let list = await models.User.findAll();
	res.json({
		list
	})
});
app.get('/detail/:id' , async (req , res)=>{
	let {id} = req.params;
    let user = await models.User.findOne({
    	where:{
    		id
    	}
    });
	res.json({
		user
	})
});
function demo_middleware(req ,res ,next){
	try{

		//mysql 操作
	}catch(error){
		next(error);
	}

	// Promise.then().catch(next)

};

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
};

// function not_fount_handler(req , res , next){
// 	res.json({
// 		message:'api 不存在',
// 	})
// };
// app.use(not_fount_handler);
app.use(error_handler_middleware);
// 加载 一个 static 的 中间件
app.use(express.static('static' , {
	//设置 后缀
	extensions:['html','htm'],
}));




app.listen(8080  , ()=>{

})