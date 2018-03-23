# MORE SERVER STUFF
---

We need to make a few more changes to some of the files in the server before we can test the authenticated routes.

### app.js
In the `app.js` file on the server side, make the following changes:

1. Add the following line beneath the `user` variable: `var authTest = require('./controllers/authtestcontroller');`
2. Move`app.use('/test', test);` and `app.use('/api/user', user);` `ABOVE app.use(require('./middleware/validate-session'));`
3. BENEATH the `validate-session` line, add the following: `app.use('/authtest', authTest);`

### What Did We Just Do?
Anything beneath the `validate-session` will require a token to access, thus becoming protected. Anything above it will not require a token, remaining unprotected. Therefore the `test` and `user` routes are not protected, while the `authtest` route is protected. We also added a require statement for a new controller `authtestcontroller`. Let's make that now.

### controllers/authtestcontroller.js
Create the `authtestcontroller.js` file inside of the `controllers` folder, then add the following code:

```js
var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

// define the home page route

  router.get('/items', function(req, res) {
	var userid = req.user.id;
	AuthTestModel
	.findAll({
		where: { owner: userid }
	})
	.then(
		function findAllSuccess(data) {
			res.json(data);
		},
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});

router.get('/item/:id', function(req, res) {
	var data = req.params.id;
	var userid = req.user.id;

	//console.log(data); here for testing purposes
	AuthTestModel
		.findOne({
			where: { id: data, owner: userid }
		}).then(
			function getSuccess(updateData) {
				res.json(updateData);
			},

			function getError(err) {
				res.send(500, err.message);
			}
		);
});

router.post('/create', function(req, res) {
    var owner = req.user.id;
	var authTestData = req.body.authtestdata.item;

	AuthTestModel
	.create({ 
	   	authtestdata: authTestData,
	   	owner: owner
	   })

		.then(
				function createSuccess(authtestdata) {
				//send a response as json
		   		res.json({
		   			authtestdata: authtestdata
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});
```
These functions have the folloi
#### GET /items
Finds all items in the table with the user id in the token

#### GET /item/:id
Finds a single item in the the table. Uses both the id from the url (primary key) and the userid from the token (foreign key).

#### POST /create
Add an item to the table with the user id from the token.

<hr>

Now that our setup is done, let's try out our new routes.