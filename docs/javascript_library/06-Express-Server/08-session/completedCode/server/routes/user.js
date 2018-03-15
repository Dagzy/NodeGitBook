var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

router.post('/createuser', function (req, res) {
	var username = req.body.user.username;
	var pass = req.body.user.password;

	User.create({
		username: username,
		passwordhash: bcrypt.hashSync(pass, 10)
	}).then(
		function createSuccess(user) {
			var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });

			res.json({
				user: user,
				message: 'created',
				sessionToken: token
			});
		},
		function createError(err) {
			res.send(500, err.message);
		}
	);
});



router.post('/signin', function (req, res) {
	User.findOne({ where: { username: req.body.user.username } }).then(
		function (user) {
			console.log("User:", user);
			if (user) {
				console.log("User", user);
				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
					console.log(matches);
					if (matches) {
						var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });
						res.json({
							user: user,
							message: "successfully authenticated",
							sessionToken: token
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

module.exports = router;




/******************* 
 * STEP 1: SIGN IN USER
********************/

//2
// router.post('/signin', function(req, res) {

// });


// /******************* 
//  * STEP 2: signin
// ********************/


// router.post('/', function(req, res) {
//             //1     //2       //3                                   //4
// 	User.findOne( { where: { username: req.body.user.username } } ).then(
    
//         //6
//         function(user) {
//             console.log(user);
// 		},
// 		function(err) {
// 			res.json(err);
// 		}
// 	);
// });



// /******************* 
//  * STEP 3: signin
// ********************/

// router.post('/', function(req, res) {
// 	User.findOne( { where: { username: req.body.user.username } } ).then(
// 		function(user) {
//             //1
// 			if (user) {
// 				console.log("User is a match!");
// 			} else {
// 				res.status(500).send({ error: "failed to authenticate" });
// 			}
// 		},
// 		function(err) {
// 			res.json(err);
// 		}
// 	);
// });

// module.exports = router;


// /******************* 
//  * STEP 4: signin
// ********************/


// router.post('/signin', function (req, res) {
// 	User.findOne({ where: { username: req.body.user.username } }).then(
// 		function (user) {
// 			console.log("User:", user);
// 			if (user) {
// 				//1				//2						//3					//4
// 				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
// 					console.log(matches); //5
// 				});
// 			} else {
// 				res.status(500).send({ error: "failed to authenticate" });
// 			}
// 		},
// 		function (err) {
// 			res.json(err);
// 		}
// 	);
// });



// /******************* 
//  * STEP 5: signin
// ********************/

// router.post('/signin', function (req, res) {
// 	User.findOne({ where: { username: req.body.user.username } }).then(
// 		function (user) {
// 			console.log("User:", user);
// 			if (user) {
// 				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
// 						//1
// 					if (matches) {
// 						//2				//3						//4				//5
// 						var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });
// 						console.log(token);
// 					} else {
// 						//6
// 						res.status(500).send({ error: "you failed, yo" });
// 					}
// 				});
// 			} else {
// 				res.status(500).send({ error: "failed to authenticate" });
// 			}
// 		},
// 		function (err) {
// 			res.json(err);
// 		}
// 	);
// });



// /******************* 
//  * STEP 6: signin
// ********************/

// router.post('/signin', function (req, res) {
// 	User.findOne({ where: { username: req.body.user.username } }).then(
// 		function (user) {
// 			if (user) {
// 				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
// 					if (matches) {
// 						var token = jwt.sign({ id: user.id }, "i_am_secret", { expiresIn: 60 * 60 * 24 });
// 							//1
// 						res.json({
// 							user: user, //2
// 							message: "successfully authenticated", //3
// 							sessionToken: token //4
// 						});
// 					} else {
// 						res.status(500).send({ error: "you failed, yo" });
// 					}
// 				});
// 			} else {
// 				res.status(500).send({ error: "failed to authenticate" });
// 			}
// 		},
// 		function (err) {
// 			res.json(err);
// 		}
// 	);
// });