# BCRYPT SETUP
---

In this module we'll set up `bcrypt.js` in our application.

<hr/>

### Import
First, install the bcrypt package. Let's go ahead and add it to our `package.json` file and run `npm update`:

```js
"dependencies": {
    "bcryptjs": "^2.4.3", //<----- ADD THIS
    "body-parser": "^1.18.2",
    "dotenv": "^5.0.1",
    "express": "^4.13.4",
    "jsonwebtoken": "^8.2.0",
	"pg": "^7.4.1",
    "pg-hstore": "^2.3.2",
    "sequelize": "^4.37.0"
  }

```
Once installed, we have to add it to the database. Just like with `jwt`, create a new variable. For its declaration, use the `require` statement for `bcryptjs`.

```js
var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs'); //<---- ADD THIS
var jwt = require('jsonwebtoken');

```


### Examining bcrypt.hashSync()
[bcryptjs Docs](https://github.com/dcodeIO/bcrypt.js) <br>
TODO: Point to the bcrypt docs and show `hashSync` <br>
TODO: Discuss hashing. There are screenshots in the original docs. 

### Adding bcrypt
Implement bcrypt into the create:
```js
router.post('/', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;

		User.create({
            username: username,
			passwordhash: bcrypt.hashSync(pass, 10)  //1 ADD THIS TO THE PROPERTY VALUE
		}).then(
			function createSuccess(user){
				var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

				res.json({
						user: user,
						message: 'created',
						sessionToken: token
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

module.exports = router;
```

### POSTMAN
Test in Postman. 
![screenshot](assets/01-bcrypt-success.PNG)

Test in 
![screenshot](assets/02-bycrpt-postgres-view.PNG)

### Analysis
We're adding the `hashSync` function to our new User object so that we don't store the password in a format that is easy to read. We supply the original password and tell bcrypt to use the salt 10 times. The resulting hash value can be seen both screenshots above. We'll use this same process again in the near future when we add authentication to our database.