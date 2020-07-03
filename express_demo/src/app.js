const express = require('express');
const bodyParser = require('body-parser');



const models = require('../models');

// {
// 	[model:Todo],
// 	sequelize,
// 	Sequelize
// }

//是一个 express 实例

const app = express();

const userRouter = require('./router/user_router');

app.use(express.json());
//for parsing applcation/xwww-form-urlencoded
app.use(express.urlencoded());


// for parsing application/xwww-from-urlencoded
app.use(bodyParser.urlencoded({extended:true}));


//1. 所有的错误 ，http status = 500


/** 查询任务列表*/
app.get('/list/:status/:page' , async (req , res , next)=>{
	let list = await models.Todo.findAll();
	res.json({
		list
	})
});
/**创建 一个 任务 */
app.post('/create' , async (req , res , next)=>{
	try{
		let {name,deadline,content} = req.body;
		let todo = await models.Todo.create({
			name,
			deadline,
			content
		})
		res.json({
			message:'创建成功',
			todo
		})

	}catch(error){
		next(error)
	}
	
});
/**编辑 一个 任务 */
app.post('/update' , async (req , res , next)=>{
	try{
		let {name,deadline,content,id} = req.body;
		let todo = await models.Todo.findOne({
			where:{
				id
			}
		})
		if(todo){
			let todo =todo.update({
				name,deadline,content
			})
			res.json({
				message:'编辑成功',
				todo
			})
		}else{
			res.json({
				message:'没有该记录',
				todo
			})
		}

	}catch(error){
		next(error)
	}	
	
});
/** 修改状态 删除*/
app.post('/update_status' , async (req , res , next)=>{
	let {id,status} = req.body;
	let todo = await models.Todo.findOne({
		where:{
			id
		}
	})
	if(todo){
		let todo =todo.update({
			status
		})
		res.json({
			message:'状态修改成功',
			todo
		})
	}else{
		res.json({
			message:'没有该记录',
			todo
		})
	}
	// res.json({
	// 	message:'修改状态成功',
	// 	todo,
	// 	id
	// })
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



app.use((err , req , res , next)=>{
	if(err){
		res.status(500).json({
			message:err.message

		})
	}
});



app.listen(8080  , ()=>{

})