require('dotenv').config();


var express = require('express');
var app = express();
var testRoutes = require('./controllers/testcontroller')
var userRoutes = require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api/user', userRoutes);

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















