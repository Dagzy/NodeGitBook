var express = require('express');
var app = express();
var testRoutes = require('./routes/testroutes')
var userRoutes = require('./routes/user')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/testroutes', testRoutes);

//1 Write it this way
app.use('/api/user', userRoutes);

//2 Or write it this way
//app.use('/api/user', require('./routes/user'));

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















