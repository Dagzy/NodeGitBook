require('dotenv').config();

var express = require('express');
var app = express();
// const cors = require('cors');
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables
//app.use(cors());
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test);
app.use('/api/user', user);

/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);


app.listen(3000, function(){
	console.log('App is listening on 3000.')
});