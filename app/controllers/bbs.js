var Message = require('../models/message')

exports.getMessage = function (req,res){
    var pn = parseInt(req.body.pNum),
        much = 10,
        iCount;
    
    Message.count({status: 0},function(err,count){
        if (err) {
            console.log(err)
        };
        iCount = count

        Message.paging(pn,much,function(err,message){
            if (err) {
                console.log(err)
            };
            res.send({
                message: message,
                count: iCount,
                pn: pn,
                much: much,
                pMuch: Math.ceil(iCount/much)
            })
        })
    })
  }
exports.createMessage = function (req,res){
    var message = req.body.message

    var _message = new Message({
                        theme: message.theme,
                        status: 0,
                        sessionContent: [{
                            content: message.content,
                            headPhoto: message.headPhoto,
                            status: 0,
                            hidden: 0,
                            name: message.name,
                            contact: message.contact,
                            meta: {
                                createAt: Date.now(),
                                updateAt: Date.now()
                            },
                            replyType: 0
                        }],
                        meta: {
                            createAt: Date.now(),
                            updateAt: Date.now()
                        }
                    })
  
    _message.save(function(err,message){
        if (err) {
            console.log(err)
        };
        res.send("200")
    })
  }
exports.addMessage = function (req,res){
    console.log(req.body.message)

    var message = req.body.message;
    var _id = req.body._id;
    var msg = {
                content: message.content,
                headPhoto: message.headPhoto||"",
                status: 0,
                hidden: 0,
                name: message.name,
                contact: message.contact||"",
                meta: {
                    createAt: Date.now(),
                    updateAt: Date.now()
                },
                replyType: message.replyType || 0
            }
    var _message;

    Message.findById(_id,function (err, aSession){
        if (err) {
          console.log(err);
        };

        aSession.sessionContent.push(msg);

        _message = aSession;

        _message.save(function (err,session){
          if(err){
            console.log(err);
            res.send("fail");
          }else{
            res.send("200");
          }
        })
    })
  }