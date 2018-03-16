#CHALLENGE #2 SOLUTIONS
---
In this module we give you the answer to the challenges. Spoilers ahead.

<hr />

#CHALLENGE #2 SOLUTIONS

Here are the routes to add to the `testroutes.js` file:
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

#CHALLENGE #3 SOLUTIONS
Here is the solution for the second set of challenges. The only trick part is #3 below:

1. Add a new file:
```
javascript-library
    └── 7-Express Server
        └── Server
            └── routes
                └── testroutes.js
                └── moretestroutes.js
            └── app.js
```
2. Add variables, routes, and export to the file:

```js
var express = require('express')
var router = express.Router()

router.get('/morestuff', function (req, res) {
  res.send('more stuff route here!')
});

router.get('/atonofdata', function (req, res) {
  res.send('a ton of data on the more stuff route')
});

module.exports = router;
```

3. Add the following to `app.js`:

```js
var express = require('express');
var app = express();
var testRoutes = require('./routes/testroutes')
var moreTestRoutes = require('./routes/moretestroutes') //1

app.use('/testroutes', testRoutes)
    //2     //3                //4
app.use('/moretestroutes', moreTestRoutes) 
```
Some minor analysis:
1. Create a variable called `moreTestRoutes`
2. Call `app.use()`.
3. Create the base url. 
4. Pass in the moreTestRoutes variable. 