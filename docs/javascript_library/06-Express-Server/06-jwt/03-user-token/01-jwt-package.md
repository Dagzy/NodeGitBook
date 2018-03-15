# USER TOKEN
---
We have successfully set up user accounts in our database. Until we set up authentication, however, it doesn't really do us much good. Let's install `jwt` and get it set up for use within our database.
<hr>

### Adding JWT
Go to your `package.json` and add the following code:
```js
 "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.3",
    "http-server": "^0.11.1",
    "jsonwebtoken": "^8.2.0", // <--- ADD THIS LINE
    "pg": "^7.4.1",
    "pg-hstore": "^2.3.2",
    "sequelize": "^4.37.0"
  },
```
The notation is important; the `^` symbol locks in this version of `jwt` and prevents it from updating in the future. When things update, they usually break. This will prevent that headache. Then run `npm update`.

### Add JWT to the User file
Unfortunately installing `jwt` isn't enough by itself. In order to use it, we have to tell our program to use it. We do this by creating a new variable `jwt` and set its value as `jsonwebtoken` to allow us access to the package's methods and functions. The `require` statement works similar to the way `getElementById` works with `html` elements in, that it declares a reference to a NPM package. Add the new variable declaration to the top of your file with the rest of the variables:

```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken'); //<-- ADD THIS LINE
```

