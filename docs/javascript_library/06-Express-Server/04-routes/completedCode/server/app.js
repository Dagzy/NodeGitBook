var express = require('express');
var app = express();
var testRoutes = require('./routes/testroutes')


app.use(require('./middleware/headers'));

//TODO: Explain this
app.use('/testroutes', testRoutes)

//TODO: Write challenges for more testroutes

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});



















