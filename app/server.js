var express = require('express')
var app = express();

//to set frontend engine
app.set('view engine', 'ejs')
//to go to views directory
app.set('views', __dirname + '/../public/views')
//to serve the static files
express.static(__dirname + '/../public')


require('./database')
require('./routes')(app)

module.exports = app;


