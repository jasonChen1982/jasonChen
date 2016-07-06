var mongoose = require('mongoose')

var ExampleSchema = new mongoose.Schema({
	title: String,
	content: String,
	preViewPic: String,
	detialContent: [{
		secTitle: String,
		detialPic: String
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

ExampleSchema.pre('save', function (next){
  if(this.isNew){
  	this.meta.createAt = this.meta.updateAt = Date.now()
  }else{
  	this.meta.updateAt = Date.now()
  }

  next();
})

ExampleSchema.statics = {
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
	}
}

module.exports = ExampleSchema