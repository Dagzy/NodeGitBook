var express = require('express')
var router = express.Router()

router.get('/morestuff', function (req, res) {
  res.send('more stuff route here!')
});

router.get('/atonofdata', function (req, res) {
  res.send('a ton of data on the more stuff route')
});

module.exports = router;