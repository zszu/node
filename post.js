
// get post head 等等
// console.log('get 请求 , post 请求')

let http = require('http');
let querystring = require('querystring');

http.createServer((req , res)=>{
	let result = [];
	req.on('data' , buffer=>{
		// console.log(buffer);
		result.push(buffer)
	});
	req.on('end' ,()=>{
 		// console.log(result);

 		//数组转为二进制
 		let data = Buffer.concat(result);


 		data = data.toString();

 		// console.log(data);
 		// 字符串形式 输出
 		// console.log(data.toString());
 		
 		// 解析字符串
 		console.log(querystring.parse(data));
	});

}).listen(8888)