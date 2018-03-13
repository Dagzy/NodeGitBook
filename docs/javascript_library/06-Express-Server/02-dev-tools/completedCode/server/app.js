var express = require('express'); //1
var app = express(); //2

//3
app.listen(3000, function(){
	console.log('App is listening on 3000.')
});

// app.listen(3000, function(){
// 	console.log('Hey man!!!')
// });