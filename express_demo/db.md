# 数据库


	
	命令创建模型 生成迁移文件


	 命令行创建模型
			 npx sequelize-cli model:generate --name User -attributes username:string
	 创建数据库
	 		 npx sequelize-cli db:migrate  --env=development

	 notice : // 注意， await 关键字仅仅在 async function中有效

	 curd
 		```
 		  <!-- 查询多条数据 -->
 		  let list = await models.User.findAll();
 		  <!-- 查询一条数据 -->
 		  let user = await models.User.findOne({
		    	where:{
		    		id
		    	}
	      });
 		```