var Index = require('../app/controllers/index')
var Login = require('../app/controllers/login')
var Bbs = require('../app/controllers/bbs')
var Example = require('../app/controllers/example')

module.exports = function (app){

//index page
  app.get('/', Index.index);



//example page
  app.post('/getExample', Example.getExample);
  app.post('/createExample', Example.createExample);




//bbs page
  app.post('/getMessage', Bbs.getMessage);
  app.post('/createMessage', Bbs.createMessage);
  app.post('/addMessage', Bbs.addMessage);


// 
  app.get('/admin/login', Login.login)
  app.post('/admin/loginUp', Login.loginUp)
  app.post('/admin/register', Login.register)
  app.post('/admin/addMessage', Bbs.addMessage);

}

