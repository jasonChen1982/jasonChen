var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var port = process.env.PORT || 80;
var app = express();

mongoose.connect('mongodb://localhost/JasonChen')

app.set('views', './app/views')
app.set('view engine', 'jade')



app.use(express.static(path.join(__dirname, 'public')));
// parse application/json 
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(multer({
	dest: './public/imgCache'
}));


require('./config/routes.js')(app);

app.listen(port, function () {
    console.log(' JasonChen listening on port ' + port);
});
