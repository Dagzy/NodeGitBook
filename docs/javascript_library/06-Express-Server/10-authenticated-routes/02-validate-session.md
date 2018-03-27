# VALIDATE SESSION
---
In this module, we'll construct a file that will check to see if the request has a token attached. 

<hr />

### Files
Please add the following to your server in the `middleware` folder:
```
    └── 5-Express Server
            └── server
                └── controllers
                └── middleware
                    └── headers.js
					└── validate-session.js <----- ADD THIS              
                └── models
            └── client
```
### Code
Inside of `validate-session.js`. Put the following code inside of that file. There is a little bit of code that is commented out here. Leave it like that for now.

```js
var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
	// if (req.method == 'OPTIONS') {
	// 	next()
	// } else {
		var sessionToken = req.headers.authorization; //1
		console.log(sessionToken) //2
		if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); //3
		else { //4
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
					res.status(400).send({error: 'Not authorized'});
				}
			});
		}
	//}
}
```

### What Just Happened?
There's a lot here, so take it slow through this explanation. Additional information on the `verify` method can be found [here](https://github.com/auth0/node-jsonwebtoken).

1. The variable `sessionToken` is created to hold the token, which is pulled from the authorization header of the request coming in.
2. The token is printed to the console. This is purely for debugging purposes to verify that the token is being sent to the server. It should not be left in the final code, as it is a potential security vulnerability.
3. If no token is present, the `403 Bad Request` error is returned as the response. We have several different error handling responses in this file, so assigning each a different error code or message is a big help in debugging.
4. No `user` property is ever provided in the request, so this check will run whenever a token is present. This prevents unauthorized use of a token that was assigned to a different user.
5. The `verify` method decodes the token with the provided secret, then sends a callback with two variables. If successful, `decoded` will contain the decoded payload; if not, `decoded` remains `undefined`. `err` is `null` by default.
6. If `decoded` has a value, the Sequelize `findOne` method looks for an id in the `users` table that matches the `decoded.id` property. This value is then passed into a callback.
7. The callback sets the `user` value for the request as the `id` value passed to it then sends the request on to its next destination. This property will be necessary later in adding to the database.
8. If no matching `id` is found, an error message is thrown.
9. If no value for `decoded`, an error message is thrown. 

### Before You Move On
Go back and read through all that again. Make a flow chart of what's happening. Explain to a partner what is going on. Do whatever you need to do in order to understand this file. This is some very deep, very detailed code that can be tough to understand. Security should be your #1, #2, and #3 priorities when coding, so it's worth the extra time to get it right.