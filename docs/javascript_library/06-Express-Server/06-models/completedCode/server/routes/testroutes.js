var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');

// define the home page route
router.get('/', function (req, res) {
  res.send('This is a big ole test route for routing')
})

/**********************
 * TEST POSTS WITH TEST MODEL
 ********************/

//Step 1 - Use this with Postman
router.post('/testpost/one', function (req, res) {
  res.send("Test 1 went through!");
});



//STEP 2 - Use this with Postman
router.post('/testpost/two', function (req, res) {
  let testData = "Test two";
  console.log(req);
  TestModel
    .create({
      testdata: testData
    })
  console.log("Test two went through.")
});


//STEP 3 - Use this with Postman
router.post('/testpost/three', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
  console.log("Test three went through.")
});



//STEP 4 - Use this with Postman
router.post('/testpost/four', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message() {
        console.log("Step four achieved!");
      }
    );
});


//STEP 5 - Use this with Postman
router.post('/testpost/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        console.log(testdata);
        console.log("Step five achieved!");
      }
    );
});


//STEP 6 - Use this with Postman
router.post('/testpost/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        //send a response as json
        res.json({
          testdata: testdata
        });
        console.log("step six");
      }
    );
});


router.post('/testpost/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        //send a response as json
        res.json({
          testdata: testdata
        });
        console.log("step seven");

      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

router.post('/testpost/eight', function (req, res) {
  //var testData = req.body.testdata.item;
  // Testing without Postman Body? VVV
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })

    .then(
      function createSuccess(testdata) {
        //send a response as json
        res.json({
          testdata: testdata
        });
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
  console.log("step eight");

});

module.exports = router;


