var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')

/***************
*****ROUTES*****
****************/
app.use('/test', test)

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















