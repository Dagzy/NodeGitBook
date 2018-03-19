var express = require('express');
var app = express();
var testController = require('./routes/testcontrollers')
var userController = require('./routes/moretestroutes')

/***************
*****ROUTES*****
****************/
app.use('/test', testController)
app.use('/users', userController)

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















