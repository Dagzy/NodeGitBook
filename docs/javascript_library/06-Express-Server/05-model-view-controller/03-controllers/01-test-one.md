# Route Set up
---

In the next few modules we will discuss how to build controller methods and use them to POST data and persist it to our database.

<hr>

### POST
So far, in previous modules, we've made GET requests with HTTP. We have made requests that ask the server to send us some hard coded data. Now, we want to work with Postgres to store data that a user might send to it. Clearly, we want to be able to do this so that our users can save data and come back to it later. 

Let's look at the flow of how this will work. 

### Code

```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1

      //2       //3           
router.post('/one', function(req, res){
  //4
  res.send("Got a post request.") //5
})
```

<hr >

### Analysis
1. Import the test model. This tells sequelize how much data the table requires and the data-types of each.
2. The type of request we are sending. `POST` sends data to the database to be stored.
3. The route we are using. This tells the database where we want to put our data.
4. This will become the data we send in our request.
5. The response once we're done. This will be sent to the client to tell the user whether or not the request was successful.

### Challenge
Use Postman to `POST` data to your database with the following route. Start your server with `nodemon`, then create a request. In this challenge, we aren't actually sending any data. We just want to see that we get the expected response back to test whether or not we can communicate with the database. Remember to select the `raw` and `application/json` options when sending the request.

