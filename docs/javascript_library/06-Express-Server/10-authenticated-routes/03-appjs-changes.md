# MORE SERVER STUFF
---
In this module, we'll make changes to `app.js` to allow us to create the authenticated routes.

<hr />

### app.js
In the `app.js` file on the server side, make the following changes as noted by the comments:

```js
require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller'); //1

var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables
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

app.use(require('./middleware/validate-session')); //2
app.use('/authtest', authTest); //3


app.listen(3000, function(){
	console.log('App is listening on 3000.')
});
```

### Analysis
In this file, we changed the `app.js` to do the following:
1. We imported the `authtestcontroller` file for access to the endpoints. 
2. We imported the `validate-session` middleware, which will check to see if the incoming request has a token.
3. Anything beneath the `validate-session` will require a token to access, thus becoming protected. Anything above it will not require a token, remaining unprotected. Therefore, the `test` and `user` routes are not protected, while the `authtest` route is protected.