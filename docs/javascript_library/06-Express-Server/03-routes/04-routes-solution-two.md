#CHALLENGE #2 SOLUTIONS
---
In this module we give you the answer to the challenges. Spoilers ahead.

<hr />

Here are the routes to add to the `testcontroller.js` file:
```js
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hey!!! This is a test route!')
});

router.get('/about', function (req, res) {
  res.send('This is an about route');
});

//2 Pass in an object
router.get('/contact', function (req, res) {
  res.send({user: "kenn", email: "kenn@beastmode.com"});
});

//2 Pass in an array
router.get('/projects', function (req, res) {
  res.send(['Project 1', 'Project 2']);
});

//3 Pass in an array of objects
router.get('/mycontacts', function (req, res) {
  res.send([
    {user: "quincy", email: "kenn@beastmode.com"},
    {user: "aaron", email: "aaron@beastmode.com"},
    {user: "quincy", email: "tom@beastmode.com"},
    {user: "tom", email: "tom@beastmode.com"}
  ]);
});

module.exports = router;

```
