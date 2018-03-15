#PROCESS.ENV
---
TODO: Explain....In this module we'll hide our secret key.

<hr />




### INSTALL dotenv package

### Import
First, install the `dotenv` package. Let's go ahead and add it to our package.json file and run `npm update`:

```js
"dependencies": {
    "body-parser": "^1.15.1",
    "dotenv": "^4.0.0",
    "express": "^4.13.4",
    "jsonwebtoken": "^7.2.1",
    "pg": "^4.5.6",
    "pg-hstore": "^2.3.2",
    "sequelize": "^3.23.3"
  }
```


### process.env file
1. At the root level add a file called `.env`.

2. In the file add a secret: 

TODO: Directions for adding the process.env file.
TODO: Explain process.env

### process.env
```js

router.post('/createuser', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;

		User.create({
			username: username,
			passwordhash: pass
		}).then(

			function createSuccess(user){
			    var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
				res.json({
						user: user,
						message: 'created',
						sessionToken: token  //1
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

module.exports = router;

```



