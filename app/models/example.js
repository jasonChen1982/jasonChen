var mongoose = require('mongoose')
var ExampleSchema = require('../schemas/example')
var Example = mongoose.model('Example',ExampleSchema)

module.exports = Example