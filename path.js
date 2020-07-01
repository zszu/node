let path = require('path');
var dirname = path.dirname('node/a/b/c/1.jpg');
var filename = path.basename('node/a/b/c/1.jpg');
var extname = path.extname('node/a/b/c/1.jpg');

// basename() 获取文件名
// extname() 获取文件后缀名
// console.log(dirname);
// console.log(filename);
// console.log(extname);

var re = path.resolve('/node/a/b/c' , '../../' , 'd');
var index = path.resolve(__dirname , 'index.js');

// console.log(re);
// \node\a\d 相对路径
// console.log(index);
// C:\zu\myphp_www\PHPTutorial\WWW\zu\node.js\index.js  绝对路径

