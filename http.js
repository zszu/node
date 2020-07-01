
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
