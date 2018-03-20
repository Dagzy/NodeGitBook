var express = require('express');
var app = express();
var testRoutes = require('./controllers/testcontroller')
var sequelize = require('./db');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use('/testroutes', testRoutes)

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















