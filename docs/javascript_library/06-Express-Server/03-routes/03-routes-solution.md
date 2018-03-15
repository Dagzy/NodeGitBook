### MORE ROUTES
---
In this module we'll discuss the solution to the previous challenge and add a few more routes for practice.

<hr />

### Solution
To define the route, you would have needed the following code in the `routes.js` file:

```js
var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hey!!! This is a test route!')
});

//1            //2 
router.get('/about', function (req, res) {
  res.send('This is an about route') //3
});
```

<hr />

###Analysis
This is all you have to do to fulfill the challenge. 
1. User the router instance that we've created and call the `.get` method from express.
2. The first parameter is the `/about` that we'll be appending to the URL.
3. 

<hr />

### Another route
For practice add four more test routes with messages of your choice. 

