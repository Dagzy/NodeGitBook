var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// define the home page route
router.get('/', function (req, res) {
  res.send('This is a big ole test route for routing')
})


// define the hello client route
router.get('/helloclient', function (req, res) {
  res.send('This is a big ole test route for routing')
})

/************************
 * GET #1:  Get all items in testdata
 ***********************/
router.get('/one', function(req, res) {

  TestModel
	.findAll({
    attributes: ['id', 'testdata']
	})
	.then(
		function findAllSuccess(data) {
			console.log("Controller data:", data);
			res.json(data);
		},
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});

/************************
 * POST 1: Simple Response to POST req
 ***********************/
router.post('/one', function (req, res) {
  res.send("Test 1 went through!");
});

/*********************************
 * POST 2: Create new TestModel instance
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
 * POST 3: Get req.body from request
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
 * POST 4: Return a Promise
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
 * POST 5: Return data in a Promise
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
 * POST 6: Return response as JSON
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
 * POST 7: Handle errors
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


