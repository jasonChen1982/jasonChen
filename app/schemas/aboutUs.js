var mongoose = require('mongoose')

var AboutUsSchema = new mongoose.Schema({
	title: String,
	content: String,
	bigPic: String,
	headPhoto: String
})

AboutUsSchema.statics = {
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

module.exports = AboutUsSchema