var mongoose = require('mongoose')
var AboutUsSchema = require('../schemas/admin')
var AboutUs = mongoose.model('AboutUs',AboutUsSchema)

module.exports = AboutUs