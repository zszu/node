const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

let user = {
	admin:123456,
};
http.createServer((req , res)=>{

	//获取数据
	let path,get,post;
	if(req.method == 'GET'){
		let {pathname , query} = url.parse(req.url , true);
		path = pathname;
		get = query;
		complete();

	}else if(req.method == 'POST'){
		let arr = [];
		path = req.url;
		req.on('data' , buffter=>{
			arr.push(buffter);
		});
		req.on('end' , ()=>{

			post  = querystring.parse(Buffer.concat(arr).toString());

			complete();
		});
		

	}

	function complete() {
		
		if(path == '/login'){
			res.writeHead(200 , {
				"Content-Type" : "text/plain;charset=utf-8",
			})
			let {username , pwd}  = get;

			if(!user[username]){
				res.end(JSON.stringify({
					code : 404,
					msg : "用户不存在",
				}));
			}else if(user[username] != pwd){

				res.end(JSON.stringify({
						code : 404,
						msg : "密码错误",
				}));
			}else{

				res.end(JSON.stringify({
						code : 200,
						msg : "登录成功",
				}));
			}
		}else if(path == '/register'){
				res.writeHead(200 , {
					"Content-Type" : "text/plain;charset=utf-8",
				})
				let {username , pwd} = post;

				if(user[username]){
					res.end(JSON.stringify({
						code : 404,
						msg : "用户已存在",
					}));
				}else{
					user[username] = pwd;
					res.end(JSON.stringify({
							code : 200,
							msg : "注册成功",
					}));
				}
				
		}else{
			fs.readFile(`.${path}` , (err , data)=>{
				if(err){
					res.end('404');
				}else{
					res.end(data);
				}
			})
		}
	}
}).listen(8080)