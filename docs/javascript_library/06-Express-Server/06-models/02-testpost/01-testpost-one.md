# TEST ROUTES
---

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
  res.send("Got a post request.")
})
```

<hr >

### Analysis
TODO: Explain this code:

1. Import the test model
2. 
3. 
4. 

### Challenge
TODO: Write challenge that leads to the /two route.

