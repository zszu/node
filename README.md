# node 使用 npm 包管理工具


## npm 命令 
	* npm init 初始化
	* npm install <第三方包 如 jquery> 安装 == npm i 
	* npm uninstall  删除  == npm un 
	* npm update 更新
	* npm 
## cnpm
	* 安装 npm install cnpm -g --registry=https://registry.npm.taobao.org
	* 和 npm 命令 相同

## node 的 模块
	require 
		* 如果有路径 ， 就从路径中找 
		* 没有时 从 node_modules 中找
		*  在去 node 的 安装目录里面找
	1.全局模块 （对象） process
		* process.env 环境变量
		* process.argv 命令行 参数
	2.系统模块 
		* 定义 ： 需要  require() 但不需要单独下载
		* path : 用于处理文件路径和目录路径的实用工具
		* fs : 用于文件读写
	3.自定义模块
		* 定义 ： require 自已封装的模块
		* exports : 
		* module :
		* require :

## http 模块
	```
		let http = require('http');
		let fs = require('fs');
		http.createServer((request , response)=>{
			// console.log('我来了。');
			// console.log(request.url);
			fs.readFile(`./${request.url}` , (err , data)=>{
				if(err){
					response.writeHead(404);
					response.end('404 Not Found')
				}else{
					response.writeHead(200);
					response.end(data);
				}
			})
			// response.write('响应');
			// response.end();
		}).listen(8888)
	```

## 请求 
	* get
		url?user=***&pwd=***
		<32k
		url 模块
		url.parse(req.url , true)
	* post
		放在请求 体 中
		<2G
		querystring
		querystring.parse(data)