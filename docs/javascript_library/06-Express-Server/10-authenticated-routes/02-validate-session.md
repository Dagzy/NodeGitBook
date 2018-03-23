# VALIDATE SESSION
---

Inside of the `middleware` folder on the server side, add a file called `validate-session.js`. Put the following code inside of that file and we'll talk about what it does.

```js
var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
	if (req.headers.accept === '*/*') {
		next()
	} else {
		var sessionToken = req.headers.authorization;
		console.log(sessionToken)
		if (!sessionToken) 
			return res.status(403).send({ auth: false, message: 'No token provided.' });
			//next();
		if (!req.body.user && sessionToken){
			jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
				if(decoded){
					User.findOne({where: { id: decoded.id}}).then(user => {
						req.user = user;
						next();
					},
						function(){
							res.status(401).send({error: 'Not authorized'});
						});
				} else {
					res.status(401).send({error: 'Not authorized'});
				}
			});
		} else {
			next();
		}
	}
}
```

### What Just Happened?
More to come later.