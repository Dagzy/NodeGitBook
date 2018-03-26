# VALIDATE SESSION
---

Inside of the `middleware` folder on the server side, add a file called `validate-session.js`. Put the following code inside of that file and we'll talk about what it does.

```js
var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
	if (req.headers.accept === '*/*') { //11
		next()
	} else {
		var sessionToken = req.headers.authorization; //1
		console.log(sessionToken) //2
		if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); //3

		if (!req.body.user && sessionToken){ //4
			jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //5
				if(decoded){
					User.findOne({where: { id: decoded.id}}).then(user => { //6
						req.user = user; //7
						next();
					},
					function(){ //8
						res.status(401).send({error: 'Not authorized'});
					});
				} else { //9
					res.status(402).send({error: 'Not authorized'});
				}
			});
		} else { //10
			next();
		}
	}
}
```

### What Just Happened?
There's a lot here, so take it slow through this explanation. Additional information on the `verify` method can be found [here](https://github.com/auth0/node-jsonwebtoken).

1. The variable `sessionToken` is created to hold the token, which is pulled from the authorization header of the request. 
2. The token is printed to the console. This is purely for debugging purpose to verify that the token is being sent to the server, and should not be left in the final code. This is a potential security vulnerability.
3. If no token is present, the `403 Bad Request` error is returned as the response. We have several different error handling responses in this file, so assigning each a different error code or message is a big help in debugging.
4. No `user` property is ever provided in the request, so this check will run whenever a token is present. This prevents unauthorized use of a token that was assigned to a different user.
5. The `verify` method decodes the token with the provided secret, then sends a callback with two variables. If successful, `decoded` will contain the decoded payload; if not, `decoded` remains `undefined`. `err` is `null` by default.
6. If `decoded` has a value, the Sequelize `findOne` method looks for an id in the `users` table that matches the `decoded.id` property. This value is then passed into a callback.
7. The callback sets the `user` value for the request as the `id` value passed to it then sends the request on to its next destination. This property will be necessary later in adding to the database.
8. If no matching `id` is found, an error message is thrown.
9. If no value for `decoded`, an error message is thrown. 
10. Error handling. If a value is present for `req.body.user` is found and a token is present, one can assume that the user is already signed in and the request is sent to its next destination. However, this value should NEVER be present on the request, as no `user` property is sent on `req.body`. Once decoded, `req.user` is set instead. As mentioned before, this prevents the use of a token by a different user than it was originally assigned to.
11. Look back at the pictures in the first module of this chapter, specifically the images of the requests. The `OPTIONS` request doesn't have the session token, so an error would be thrown and the header with the token would never be sent. This conditional checks the `Accept` header in the request. The `OPTIONS` request contains a value of `*/*` for this header, while the second request contains a value of `application/json`. This lets the initial request through to the server to do its check so that the second request containing the token can also be sent.

### Before You Move On
Go back and read through all that again. Make a flow chart of what's happening. Explain to a partner what is going on. Do whatever you need to do in order to understand this file. This is some very deep, very detailed code that can be tough to understand. In fact, this code had been used in projects going back over a year while not functioning properly, which was not discovered until the writing of this GitBook. Security should be your #1, #2, and #3 priorities when coding, so it's worth the extra time to get it right.