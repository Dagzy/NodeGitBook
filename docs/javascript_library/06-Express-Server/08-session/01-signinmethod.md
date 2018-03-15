
### SIGN IN
---


```js
router.post('/signin', function(req, res) {

});

```

### STEP TWO
```js
router.post('/', function(req, res) {
            //1     //2       //3                                   //4
	User.findOne( { where: { username: req.body.user.username } } ).then(
    
        //5
        function(user) {
            console.log(user);
		},
		//6
		function(err) {
			res.json(err);
		}
	);
});

```
###Analysis
1. findOne is sequelize method....
2. where is sequelize....
3. username is the value that we're going to search for in the user table....
4. promise 
5. ....pass in user parameter from the promise....
6. error handling...


### STEP THREE
```js
router.post('/signin', function (req, res) {
	User.findOne({ where: { username: req.body.user.username } }).then(
		function (user) {
			console.log("User:", user);
			//1
			if (user) {
				//1				//2						//3					//4
				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
					console.log(matches); //5
				});
			} else { //6
				res.status(500).send({ error: "failed to authenticate" });
			}
		},
		function (err) {
			res.json(err);
		}
	);
});
```
###Analysis
1. set up a conditional.....
2. get the request value
3. get the value from the db.
4. run a function that - matches will be used as a boolean...
5. quick console to print true or false for the match
6. Handle errors.

TODO: Postman Screenshot
TODO: Console screenshot



### STEP FIVE
```js
router.post('/signin', function (req, res) {
	User.findOne({ where: { username: req.body.user.username } }).then(
		function (user) {
			console.log("User:", user);
			if (user) {
				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
						//1
					if (matches) {
						//2				
						var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });
						console.log(token);
					} else {
						//4
						res.status(500).send({ error: "you failed, yo" });
					}
				});
			} else {
				res.status(500).send({ error: "failed to authenticate" });
			}
		},
		function (err) {
			res.json(err);
		}
	);
});
```
1. pass in the matches boolean. if it is true, do if
2. make a token variable
3. run that same jwt token function as before.
4. send back an error if things don't match...

### STEP SIX
```js
router.post('/signin', function (req, res) {
	User.findOne({ where: { username: req.body.user.username } }).then(
		function (user) {
			if (user) {
				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
					if (matches) {
						var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });
							//1
						res.json({
							user: user, //2
							message: "successfully authenticated", //3
							sessionToken: token //4
						});
					} else {
						res.status(500).send({ error: "you failed, yo" });
					}
				});
			} else {
				res.status(500).send({ error: "failed to authenticate" });
			}
		},
		function (err) {
			res.json(err);
		}
	);
});
```

1. get the json response.
2. pass in the user(the object in the param) value as the response property....
3. give a message if there is a success
4. store the token in the sessionToken property
