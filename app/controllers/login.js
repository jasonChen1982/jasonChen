var Admin = require('../models/admin')
var crypto = require('crypto')
exports.login = function (req,res){

    res.render('./admin/login')

  }
exports.loginUp = function (req,res){
  var user = req.body.user
  var md5 = crypto.createHash('md5')
  var pwd = md5.update(user.pwd).digest('base64')
  console.log(pwd)
  Admin.findBy({name: user.name},function(err,user){
    if (err) {
      console.log(err)
    };
    if (user) {
      if(user.password === pwd){
        res.render('./admin/manage')
      }else{
        res.render('./admin/login')
      }
    }else{
      res.render('./admin/login')
    }
  })

  }
exports.register = function (req,res){
	var user = req.body.user
  var md5 = crypto.createHash('md5')

  user.pwd = md5.update(user.pwd).digest('base64')

  var _admin = new Admin({
    					account: user.account,
    					password: user.pwd
				    })
  
    _admin.save(function(err,admin){
    	if (err) {
  			console.log(err)
  		};
    	res.send("ok")
    })

  }