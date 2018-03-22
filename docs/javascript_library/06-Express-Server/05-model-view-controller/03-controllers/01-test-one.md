# CONTROLLER SETUP
---
In this module, we'll get started on an endpoint that handles a simple POST request. 

<hr />

### Overview
Here's the flow of what we will have after this module:

![screenshot](assets/01-mvc-test-one.png)

Notice that there is no database or models at this point.

### Location
We're going to be adding to our `testcontroller.js` file that we built back in our lessons on routing.
```
javascript-library
    └── 5-Express Server
        └── Server
            └── controllers
              └── testcontroller.js
            └── models
            └── app.js
            └── db.js
```

<hr />

### Code

Before proceeding, please clear out all previous test methods in `testcontroller.js`.  Add the following items to the file:

```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');

/****************************************
 * Controller Method #1: Simple Response
****************************************/
      //1       //2           
router.post('/one', function(req, res){
  //3
  res.send("Test 1 went through!") 
});

module.exports = router;
```

<hr >

### Analysis
1. We use the Express `router` object to call the `post()` method. This corresponds to the type of HTTP request that we are sending. `POST` is telling the server that the incoming request has data coming with it. You use a POST request when you sign up for an application, send an email, send a tweet, post on a wall, etc. POST sends data through HTTP to the server, which might send the data to the database to be stored.

2. `/one` will be the endpoint/route we are using. Our route will be named `http://localhost:3000/test/one`. After that, we'll run a callback function, which will fire off a response.

3. When the client requests the given endpoint, we simply send a string in our response.

KEY POINT: Notice that we are not yet talking to our model or database. We are simply sending an empty POST and returning a string response. 

<hr />

### Test
Let's test this in Postman.
1. Make sure your server is running.
2. Open Postman.
3. Open a new request. 
4. Change the dropdown to POST.
5. Enter the endpoint into the URL input field: `http://localhost:3000/test/one` 
6. Press 'Send'.
7. You should see the following response:
![screenshot](assets/01-postman.PNG)


<hr />

### Summary of the Flow
In this module, the following flow is happening:
1. We make a POST request with Postman.
2. The router sends that request to the `testcontroller`.
3. The `testcontroller` method fires off a callback with a response.
4. The callback sends back the response to Postman.