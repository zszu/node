const express = require('express');

const router = express.Router();

router.use(function (req , res,next) {
	console.log('log from router');
	next();
});

//登录 校验
function vlaid_login_params(req , res,next){
	let {username , pwd} = req.query;
	if(!username || !pwd){
		res.json({
			message:"参数校验失败",
		})
	}else{
		req.formdata = {
			username,
			pwd,
		};
		next();
	}
}
router.get('/login' , [vlaid_login_params/** middleware*/] ,(req , res)=>{

	let {formdata} = req;
	res.json({
		formdata:formdata,
		message:'user router',
	})
});

module.exports = router;