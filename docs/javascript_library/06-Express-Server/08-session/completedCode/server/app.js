require('dotenv').config();

var express = require('express');
var app = express();
<<<<<<< HEAD
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');

=======

var test = require('./controllers/testcontroller')
var user = require('./controllers/usercontroller')
>>>>>>> 1c64a6e26badd880bc37bc952576d68bb12b5a91
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/api/user', user);

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















