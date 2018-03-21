var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// define the home page route
router.get('/', function (req, res) {
  res.send('This is a big ole test route for routing')
})


// define the home page route
router.get('/helloclient', function (req, res) {
  res.send('This is a big ole test route for routing')
})


//http://localhost:3000/somedata.json
// app.use(express.static('data'))

// app.use('/api/testing', function(req, res){
// 	res.send("This is data from the /api/test endpoint. It's from the server.");
// });

// app.use('/api/userdata', function(req, res){
// 	res.send({ user: 'kenn' });
// });

// app.use('/api/somejsondata', function(req, res){
// 	res.sendFile('./somedata.json')
// })

/************************
 * Route 1: Simple Response to POST req
 ***********************/
router.post('/one', function (req, res) {
  res.send("Test 1 went through!");
});

/*********************************
 * Route 2: Create new TestModel instance
 **********************************/
router.post('/two', function (req, res) {
  let testData = "Test two";
  console.log(req);
  TestModel
    .create({
      testdata: testData
    })
    res.send("Test 2 went through!");
});

/*********************************
 * Route 3: Get req.body from request
 **********************************/
router.post('/three', function (req, res) {
  var testData = req.body.testdata.item;
  console.log(testData);
  TestModel
    .create({
      testdata: testData
    })
  res.send("Test 3 went through!");
});

/*********************
 * 4: Return a Promise
 **********************/
router.post('/four', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message() {
        res.send("Test 4 went through!");
      }
    );
});

/*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        console.log(testdata);
        res.send(testData);
      }
    );
});

/*********************
 * Route 6: Return response as JSON
 **********************/
router.post('/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        res.json({
          testdata: testdata
        });
      }
    );
});


/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;
  console.log(testData)
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

module.exports = router;


