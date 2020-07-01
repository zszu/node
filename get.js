
// get post head 等等
// console.log('get 请求 , post 请求')

let http = require('http');
let url = require('url');

http.createServer((req , res)=>{
	console.log(req.url)
	// /a?username=zsz&pwd=112233
	// let [url , query] = req.url.split('?');



	// console.log(url.parse(req.url));
	// query: 'username=zsz&pwd=22',

	// console.log(url.parse(req.url , true));
	let {pathname , query} = url.parse(req.url , true)
	console.log(pathname,query);
	// parse(); 第二个参数 为 true 时 请求的 参数 被处理
	// query: [Object: null prototype] { username: 'zsz', pwd: '22' },

}).listen(8888)