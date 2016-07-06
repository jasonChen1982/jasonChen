var Example = require('../models/example')
var fs = require("fs")
var moment = require("moment")

exports.getExample = function (req,res){
    Example.fetch(function(err,examples){
        if (err) {
            console.log(err)
        };
        res.send(examples)
    })
  }

exports.createExample = function (req,res){
	var example = req.body.example;
	var contents = req.body.contents;
	var _detialContent = [];
	var iNow = 0;

	for(var content in contents){
		var txtIndex = "text"+iNow,
			picIndex = "contentPic"+iNow,
        	img_path = './imgCache/' + req.files[picIndex].name;
        _detialContent[iNow] = {};
		_detialContent[iNow].secTitle = contents[txtIndex];
		_detialContent[iNow].detialPic = img_path;
		iNow++;
	}

	console.log(req.files)

	if(req.files.preViewPic){
		var _example = new Example({
				title: example.title,
				content: example.content,
				preViewPic: './imgCache/' + req.files['preViewPic'].name,
				detialContent: _detialContent,
				meta: {
					createAt: Date.now(),
					updateAt: Date.now()
				}
			})
		_example.save(function (err){
			if (err) {
				console.log(err);
				res.send('error');
			}else{
				res.send('saved');
			}
		})
	}else{
		res.send('error');
	}
  }