# 介绍
	<!-- 范例 https://github.com/life2022/Node_Forum/tree/master/blog_gyji -->
	config //数据库配置目录
	migratons //数据库迁移
	models //所有模型
	mode_modules //核心目录
	seeders //包含所有种子文件
	models //src 应用目录
	static //前端页面
# 安装 依赖
	npm i express nodemon sequelize sequelize-cli mysql2

	
## 需求说明 , API 说明
	1.根据客户端传递过来的不同的参数（状态/页码） 查询 任务的列表
	2.实现 新增一个任务的功能 （名称/截止日期/内容）
	3.实现一个 编辑功能 ： 根据客户端传递过来的 任务对象（已存在的数据） 进行编辑，（名称/截止日期/内容/ID）
	4.删除一个任务，（ID)
	5.修改任务的状态 （ID/状态--待办/完成)

## 数据库初始化
	1.创建一个数据库
	2.初始化`sequelize cli` 初始化 项目的 数据库配置信息
		`npx sequelize init`
	3.生成模型文件
		* migragte 文件
		* model 文件
			`npx sequelize model:generate --name Todo --attributes name:string,deadline:date,conteng:string`
	4.持久化 ， 模型对应的【数据库表】
	 	`npx sequelize db:migrate`

## API 里面具体使用ORM模型

