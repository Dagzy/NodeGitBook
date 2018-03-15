# USER OBJECT UPDATE
---
Now that we have our token, let's use it! We'll add it to the response object in order to send it back to the client. 

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
![screenshot](03-token-postman.PNG)

### ANALYSIS
1. The server sends the token back to the client in the response. Most of the time, the client will store the token in localStorage, where it can be used in future requests. The token will be valid until it is removed or expired.

<hr/>

# MAJOR SECURITY RISK
At the moment, our signature is available for everyone in the world to see via github. This is extremely dangerous because there are robots and processes that scour public repositories looking for passwords and secret phrases. In the next lecture, we'll discuss a way to help keep sensitive information like this hidden.