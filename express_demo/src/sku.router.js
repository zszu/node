const express = require('express');

const router = express.Router();

const data = [{id:101,name:"张三",},{id:102,name:"李四",}]
router.get('/list'  ,(req , res)=>{
	res.json({
		list:data
	})
});


module.exports = router;