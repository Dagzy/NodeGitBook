# PROCESS.ENV
---
As mentioned before, our signature is currently available to anyone who wants it on GitHub. We can use a package called `dotenv` to hold data that we want hidden, then have the program reach out to that file when the data is needed. We can then prevent this file from being uploaded to GitHub.

<hr />


### INSTALL dotenv package

### Import
First, install the `dotenv` package. Let's go ahead and add it to our package.json file and run `npm update`:

```js
"dependencies": {
    "body-parser": "^1.18.2",
    "dotenv": "^5.0.1", //<--- ADD THIS
    "express": "^4.13.4",
    "jsonwebtoken": "^8.2.0",
    "pg": "^7.4.1",
    "pg-hstore": "^2.3.2",
    "sequelize": "^4.37.0"
  }
```


### process.env file
1. At the root level add a file called `.env`. By default, this is a hidden file, like your `.gitignore`.
2. Add `*.env` to your `.gitignore` to prevent it from being published to GitHub.
3. In the file add the secret. Put it in exactly like this:
```
JWT_SECRET="i_am_secret"
```

### process.env
```js

router.post('/createuser', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;

		User.create({
			username: username,
			passwordhash: pass
		}).then(

			function createSuccess(user){					//1
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

1. The system goes outside the current file to the `.env` file, where it looks for something called `JWT_SECRET`.