var mongoose = require('mongoose')

var AdminSchema = new mongoose.Schema({
	account: {
		unique: true,
		type: String
	},
	password: String,
	name: String,
	tel: String,
	Email: String,
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

AdminSchema.pre('save', function (next){
  if(this.isNew){
  	this.meta.createAt = this.meta.updateAt = Date.now()
  }else{
  	this.meta.updateAt = Date.now()
  }

  next();
})

AdminSchema.statics = {
	fetch: function (cb) {
		return this
			.find({})
			.sort('meta.updateAt')
			.exec(cb)
	},
	findById: function (id, cb){
		return this
		    .findOne({_id: id})
		    .exec(cb)
	},
	findBy: function (where, cb){
		return this
		    .findOne(where)
		    .exec(cb)
	}
}

module.exports = AdminSchema