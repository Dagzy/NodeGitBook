var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('This is a big ole test route for routing')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('This is an about route')
});

//Step 1 - Use with Postman
router.post('/testpost', function(req, res){
  res.send("Got a post request.")
})


router.post('/createuser', function(req, res){

  var username = req.body.user.username;
  var pass = req.body.user.password;

  User.create({
      username: username,
      passwordhash: pass

  }).then(
      console.log(user)
  );
})

//TODO: Explain building a post Steps 2-4

//Step 4 or 5
router.post('/posttestdata', function(req, res) {
    //var testData = req.body.testdata.item;
    // Testing without Postman Body? VVV
    var testData = "test data 1";
  
    TestModel
    .create({ 
         testdata: testData
       })
  
      .then(
          function createSuccess(definition) {
          //send a response as json
             res.json({
               definition: definition
             });
           }, 
         function createError(err) {
             res.send(500, err.message);
         }
  
      );
  });
  
module.exports = router;



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


/**
 * Part 2: User.create
 */
// router.post('/', function(req, res){

//     var username = req.body.user.username;
//     var pass = req.body.user.password;

//     User.create({
//         username: username,
//         passwordhash: pass

//     }).then(
//         // console.log(user)
//     );
// })




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