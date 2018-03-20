var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser'); //1

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json()); //2

app.use('/test', test)

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















