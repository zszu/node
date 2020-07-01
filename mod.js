

exports.a = 1;
exports.b = 2;


// module.exports = {
// 	a:1,
// 	b:2,
// }
module.exports = class{
	constructor(name){
		this.name = name;
	}
	show(){
		console.log(this.name);
	}
}

let c = 3;
