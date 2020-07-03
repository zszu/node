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
	// 1.状态 0:待办 ， 1:完成 ， -1:删除 , 2:全部
	// 2.分页的处理
	let {status,page} = req.params;
	let limit = 10;
	let offset = (page-1)*limit;
	let where = {};
	if(status != 2){
		where.status = status;
	}
	let list = await models.Todo.findAndCountAll({
		where,
		limit,
		offset
	});
	res.json({
		message:'列表查询成功',
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
			todo = await todo.update({
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
	// console.log(status !== todo.status)
	if(todo && status !== todo.status){
		todo = await todo.update({
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

});
/** 删除任务*/
app.get('/delete/:id' , async(req , res , next)=>{
	let {id} = req.params;

	let todo = await models.Todo.findOne({
		where:{
			id
		}
	})
	if(todo){
		todo = await todo.destroy({
			where:{
				id
			}
		});
		res.json({
			message:'删除成功',
			id
		})
	}else{
		res.json({
			message:'没有该记录',
			id
		})
	}

})

/** 根据 id 查询记录*/
app.get('/detail/:id' , async (req , res)=>{
	let {id} = req.params;
    let todo = await models.Todo.findOne({
    	where:{
    		id
    	}
    });
    if(todo){
    	res.json({
			message:'查询成功',
			todo
		})
    }else{
    	res.json({
			message:'没有该记录',
			id
		})
    }
	
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