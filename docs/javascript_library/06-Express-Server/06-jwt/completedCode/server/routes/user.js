var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken');


/***************
** HOME PAGE***
**************/
router.get('/', function (req, res) {
  res.send('This is a home page');
})

/***************
** HOME PAGE***
**************/
//Step one
// router.post('/createuser', function (req, res) {

//   var username = "Paulio";
//   var pass = "Hello";

//   // var username = req.body.user.username;
//   // var pass = req.body.user.password;

//   User.create({
//     username: username,
//     passwordhash: pass

//   }).then(
//     console.log("hello")
//   );
// })


//  module.exports = router;


//STEP 2
//TEST WITH PM
// router.post('/createuser', function (req, res) {

//   var username = req.body.user.username;
//   var pass = req.body.user.password;

//   User.create({
//     username: username,
//     passwordhash: pass

//   }).then(
//     console.log("hello")
//   );
// })

// module.exports = router;


//STEP 3
router.post('/createuser', function (req, res) {

  var username = req.body.user.username;
  var pass = req.body.user.password;

  User.create({
    username: username,
    passwordhash: pass

  }).then(
    //Sequelize is going to return the object it created from db.

    function createSuccess(user) {
      // var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});

      res.json({
        user: user,
        message: 'created'
        // sessionToken: token
      });
      console.log("**********USER:", user);
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});

module.exports = router;


//STEP 4
// router.post('/createuser', function (req, res) {

//   var username = req.body.user.username;
//   var pass = req.body.user.password;

//   User.create({
//     username: username,
//     passwordhash: pass

//   }).then(

//     function createSuccess(user) {
//       var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
//       console.log(token);
//       res.json({
//         user: user,
//         message: 'created'
//         // sessionToken: token
//       });
//       console.log("**********USER:", user);
//     },
//     function createError(err) {
//       res.send(500, err.message);
//     }
//   );
// });

// module.exports = router;




//STEP 5
// router.post('/createuser', function(req, res) {
// 		var username = req.body.user.username;
// 		var pass = req.body.user.password;

// 		User.create({
// 			username: username,
// 			passwordhash: pass
// 		}).then(

// 			function createSuccess(user){
// 			    var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
//           console.log(token);
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


