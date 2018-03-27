var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


/*********************
 * CREATE USER POST
**********************/
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


// /******************* 
//  * STEP 3: /SIGNIN COMPLETED
// ********************/

router.post('/signin', function(req, res) {
	User.findOne( { where: { username: req.body.user.username } } ).then(
		function(user) {
			if (user) {
				bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
					if (matches) {
						var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
						res.json({
							user: user,
							message: "successfully authenticated",
							sessionToken: token
						});
					}else {
						res.status(500).send({ error: "you failed, yo" });
					}
				});
			} else {
				res.status(500).send({ error: "failed to authenticate" });
			}
		},
		function(err) {
			res.json(err);
		}
	);
});

module.exports = router;






/***********************************
 * SIGNIN USER POST(See steps below)
************************************/

/***************
 * STEP 3: Completed Code
****************/
// router.post('/signin', function (req, res) {
// 	User.findOne({ where: { username: req.body.user.username } }).then(
// 		function (user) {
// 			console.log("User:", user);
// 			if (user) {
// 				console.log("User", user);
// 				bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
// 					console.log(matches);
// 					if (matches) {
// 						var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
// 						res.json({
// 							user: user,
// 							message: "successfully authenticated",
// 							sessionToken: token
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

// module.exports = router;


// /******************* 
//  * STEP 1: signin
// ********************/

// //7
// router.post('/signin', function(req, res) {
//             //1     //2       //3                                   //4
// 	User.findOne( { where: { username: req.body.user.username } } ).then(
    
//         //5
//         function(user) {
//             res.json(user);
// 		},
// 		//6
// 		function(err) {
// 			res.json(err);
// 		}
// 	);
// });

// module.exports = router;


// /******************* 
//  * STEP 2: BCRYPT
// ********************/

// router.post('/signin', function (req, res) {
// 	User.findOne({ where: { username: req.body.user.username } }).then(
// 		function (user) {
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

// module.exports = router;


