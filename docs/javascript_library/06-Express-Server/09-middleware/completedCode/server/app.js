var express = require('express');
var app = express();

// app.use('/api/cors/error', function(req, res){
// 	res.send("This is an endpoint that won't arrive in another domain because of cors errors.");
// });

app.use(require('./middleware/headers'));

//http://localhost:3000/somedata.json
app.use(express.static('data'))

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.use('/api/userdata', function(req, res){
	res.send({ user: 'kenn' });
});

app.use('/api/somejsondata', function(req, res){
	res.sendFile('./somedata.json')
})
app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















