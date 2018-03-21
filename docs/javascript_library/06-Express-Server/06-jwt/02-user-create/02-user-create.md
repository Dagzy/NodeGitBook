# USER CREATE ADDITIONS
---

In this module we'll extend the user create controller method.

<hr />

### Refactor
Let's do a quick refactor. It's part of the game:

```js
router.post('/createuser', function (req, res) {

  var username = req.body.user.username;
  var pass = req.body.user.password;

  User.create({
    username: username,
    passwordhash: pass

  }).then(
    function createSuccess(user) {
      res.json({
        user: user,
        message: 'created' //1
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

module.exports = router;
```
### Analysis

1. Along with the user object that gets returned as JSON, we can send a message in the response.

2. For the sake of time, we'll ask you to reread and review the flow of the above method. If you don't have an understanding, you'll want to review the information in the testcontroller in the `test/seven` method. One big difference here is that we have two properties instead of one.  

### Postman
Let's quickly test this iteration of the method with Postman.
1. Start your server then open Postman. 
2. Figure out the endpoint to send a post request to. 
3. Go to the body tab -> Choose Raw -> Change the dropdown to JSON.
4. Enter the request body. {"user" : { "username": "kenn", "password":"linuxsirad" }}
4. You should see the response string:
![screenshot](assets/02-postman.PNG)

### Postgres
Check Postgres, too:
![screenshot](assets/02-postres-user.PNG)



```js
//STEP 4
// router.post('/', function(req, res) {
// 		var username = req.body.user.username;
// 		var pass = req.body.user.password;
// 		//Need to create a user object and use sequelize to put that user into

// 		User.create({
// 			username: username,
// 			passwordhash: bcrypt.hashSync(pass, 10)
// 		}).then(
// 		//Sequelize is going to return the object it created from db.

// 			function createSuccess(user){
// 			    var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});

// 				res.json({
// 						user: user,
// 						message: 'created',
// 						sessionToken: token
// 				});
// 			},
// 			function createError(err){
// 				res.send(500, err.message);
// 			}
// 		);
// 	});

// module.exports = router;



// // var router = require('express').Router();
// var sequelize = require('../db.js');
// var User = sequelize.import('../models/user');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');

//Write the post method:
// router.post('/', function(req, res){
//     //1
//     var username = req.body.user.username;
//     var pass = req.body.user.password;
// })

//1 Explain how req.body is part of express.






// router.post('/', function(req, res) {
// 		var username = req.body.user.username;
// 		var pass = req.body.user.password;
// 		//Need to create a user object and use sequelize to put that user into

// 		User.create({
// 			username: username,
// 			passwordhash: bcrypt.hashSync(pass, 10)
// 		}).then(
// 		//Sequelize is going to return the object it created from db.

// 			function createSuccess(user){
// 			    var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});

// 				res.json({
// 						user: user,
// 						message: 'created',
// 						sessionToken: token
// 				});
// 			},
// 			function createError(err){
// 				res.send(500, err.message);
// 			}
// 		);
// 	});

// module.exports = router;
```