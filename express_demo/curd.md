# sequelize curd
1. 下载资源库

```
npm install sequelize --save
npm install mysql2 --save    // npm install mysql 提示不完整
```

2. 创建数据库配置文件 db.js,配置数据库

```
var Sequelize = require('sequelize');
module.exports = new Sequelize('blog', 'root', '123456', {
    host: 'localhost', // 数据库地址
    dialect: 'mysql', // 指定连接的数据库类型
    operatorsAliases: false,
    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }

});
```
3. 创建一个model 文件 user.js

```
var Sequelize = require('sequelize');
var sequelize = require('./db');


// 创建 model
var User = sequelize.define('user', {
    id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
    userName: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'user_name' // 指定存储在表中的键名称
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    email: {
        type: Sequelize.STRING
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
});


/*User.sync({force:false}).then(function(){
    console.log("success to start");
}).catch(function(err){
    console.log("failed to start ")
})*/
```
// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
//var user = User.sync({ force: false });


// 添加新用户
```
exports.addUser = function(userName, email) {
    // 向 user 表中插入数据
    return User.create({
        userName: userName,
        email: email
    }).then(function(result){
        console.log("插入操作成功"+result);
    }).catch(function(err){
        console.log("添加数据发生错误："+err)
    });
};




exports.findByName = function(userName) {
    return User.findOne({where: {user_name:userName
        }}).then(function(result){
             console.log("成功：" + result.id);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
};
```

// 通过用户名查找用户
 
```exports.update = function(id){


 return User.findOne({where: {id:id
        }}).then(function(user){
            
            return user.update({
                    email:'jack3@qq.com'
                }).then(function(result){
                    console.log("update success: "+result);
                }).catch(function(err){
                    console.log("更新操作出错："+err);
                }); 


        });
 
};

exports.destroy = function(id){
    return User.destroy({where:{id:id}}).then(function(result){
        console.log("delete success");
    }).catch(function(err){
        console.log("delete data err: "+err);
    })
}

```
4. 测试文件

``
var user = require('./user');
//查询操作
//user.findByName("jack");
// 添加用户
//user.addUser('jack2', 'jack@163.com');
// 更新
//user.update(1001);
//删除
//user.destroy(1001);
```