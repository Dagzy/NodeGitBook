# USER TOKEN
---
We have successfully set up user accounts in our database. Until we set up authentication, however, it doesn't really do us much good. We previously installed `jwt` when you originally made your package.json file, but now we'll get it set up for use within our database.

<hr>

### Adding JWT
Check your `package.json`. You should have the `jsonwebtoken` package installed earlier.

Let's now go into the `usercontroller.js` file and import the package:

```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var jwt = require('jsonwebtoken'); //<-- ADD THIS LINE
```