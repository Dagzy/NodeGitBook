# USER OBJECT UPDATE
---
In this module we'll add a token to the user object.

<hr>

```js

router.post('/createuser', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;

		User.create({
			username: username,
			passwordhash: pass
		}).then(

			function createSuccess(user){
			    var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
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

### Postman
![screenshot](3-token-postman.PNG)

### ANALYSIS
1. TODO: 1-2 sentences analyzing add the sessionToken property.






```
### ANALYSIS
TODO: Link to the docs.
TODO: Go to the JWT docs and break the above stuff down.
1. 
2. 
3. 
4. 
5. 
