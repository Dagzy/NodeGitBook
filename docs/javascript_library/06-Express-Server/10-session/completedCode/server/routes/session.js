var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');

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
					res.status(500).send({ error: "failed to authenticate" });
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

/******************* 
 * STEP 1: CREATE session.js
********************/
// var router = require('express').Router();
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// var sequelize = require('../db.js');
// var User = sequelize.import('../models/user.js');  //1

// //2
// router.post('/', function(req, res) {

// });

// //3
// module.exports = router;

// /******************* 
//  * STEP 2: CREATE session.js
// ********************/

// //Step 2
// var router = require('express').Router();
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// var sequelize = require('../db.js');
// var User = sequelize.import('../models/user.js');  

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

// module.exports = router;



// var router = require('express').Router();
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// var sequelize = require('../db.js');
// var User = sequelize.import('../models/user.js');


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