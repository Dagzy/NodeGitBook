var express = require('express')
var router = express.Router()      //1
var sequelize = require('../db');
var User = sequelize.import('../models/user'); 
var jwt = require('jsonwebtoken');

/*************************
** Create User Endpoint: Starter***
**************************/
// //2
// router.post('/createuser', function (req, res) {

//   var username = "The Dude";
//   var pass = "therugtiedtheroomtogether";               /**3**/

//   User.create({
//     username: username,
//     passwordhash: pass

//   }).then(
//     function message(){
//       res.send("I hate The Eagles, man");
//     }
//   );
// })

// module.exports = router;


/*************************
** Create User Endpoint: Refactor***
**************************/
// router.post('/createuser', function (req, res) {

// 	var username = req.body.user.username;
// 	var pass = req.body.user.password;
  
// 	User.create({
// 	  username: username,
// 	  passwordhash: pass
  
// 	}).then(
// 	  function createSuccess(user) {
// 		res.json({
// 		  user: user,
// 		  message: 'created' //1
// 		});
// 	  },
// 	  function createError(err) {
// 		res.send(500, err.message);
// 	  }
// 	);
//   });
  
//   module.exports = router;




/*************************
** Create User Endpoint: ISSUE TOKEN***
**************************/

router.post('/createuser', function (req, res) {

  var username = req.body.user.username;
  var pass = req.body.user.password;

  User.create({
    username: username,
    passwordhash: pass

  }).then(
    function createSuccess(user) {
      var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
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

module.exports = router;





