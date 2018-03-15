var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hey!!! This is a test route!')
});

router.get('/about', function (req, res) {
  res.send('This is an about route')
});



module.exports = router;