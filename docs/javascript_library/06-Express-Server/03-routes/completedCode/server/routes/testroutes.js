var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

// define the home page route
router.get('/', function (req, res) {
  res.send('This is a big ole test route for routing')
});

// define the about route
router.get('/about', function (req, res) {
  res.send('This is an about route')
});


router.get('/api/somejsondata', function(req, res){
	res.sendFile('./somedata.json')
});


module.exports = router;