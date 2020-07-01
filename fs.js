let fs = require('fs');

// fs.readFile('./a.txt' , (err , data)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data.toString())
// 	}
// });

// 覆盖之前内容
// fs.writeFile('./a.txt' , '写入' ,(err)=>{
// 	if(err){
// 		throw err;
// 	}
// })
// 追加内容
// fs.appendFile('./a.txt' , '追加内容' ,(err)=>{
// 	if(err){
// 		throw err;
// 	}
// })


// 异步 没有回调函数
let data = fs.readFileSync('./a.txt');
console.log(data.toString());