# TEST ROUTES
---

This module will test our route by attempting to connect to the database. If the route is wrong, a big ERROR message will be thrown back at us from Postman.
<hr>

TODO: Use these photos to explain stuff
![server](assets/01-testdata.PNG)
![server](assets/01-testdatapg.PNG)

### Code

```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1

      //2       //3           
router.post('/testpost/one', function(req, res){
  //4
  res.send("Got a post request.") //5
})
```

<hr >

### Analysis
TODO: Explain this code:

1. Import the test model. This tells sequelize how much data the table requires and the data-types of each.
2. The type of request we are sending. `POST` sends data to the database to be stored.
3. The route we are using. This tells the database where we want to put our data.
4. This will become the data we send in our request.
5. The response once we're done. This will be sent to the client to tell the user whether or not the request was successful.

### Challenge
Use Postman to `POST` data to your database with the following route. Start your server with `nodemon`, then create a request. In this challenge, we aren't actually sending any data. We just want to see that we get the expected response back to test whether or not we can communicate with the database. Remember to select the `raw` and `application/json` options when sending the request.

