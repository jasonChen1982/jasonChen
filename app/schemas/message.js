var mongoose = require('mongoose')

var MessageSchema = new mongoose.Schema({
	theme: String,
	session: String,
	status: Number,
	sessionContent: [{
		content: String,
		headPhoto: String,
		status: Number,
		hidden: Number,
		name: String,
		contact: String,
		meta: {
			createAt: {
				type: Date,
				default: Date.now()
			},
			updateAt: {
				type: Date,
				default: Date.now()
			}
		},
        replyType: Number
	}],
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

MessageSchema.pre('save', function (next){
  if(this.isNew){
  	this.meta.createAt = this.meta.updateAt = Date.now()
  }else{
  	this.meta.updateAt = Date.now()
  }

  next();
})

MessageSchema.statics = {
	fetch: function (cb) {
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	paging: function (pn,much,cb) {
		return this
			.find({status: 0})
			.sort({'meta.updateAt':-1})
			.skip(much*pn)
			.limit(much)
			.exec(cb)
	},
	findById: function (id, cb){
		return this
		    .findOne({_id: id})
		    .exec(cb)
	}
}

module.exports = MessageSchema