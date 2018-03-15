# USER TOKEN
---

<hr>

### Adding JWT
TODO: Directions
Need to add jwt to `package.json`.
```js
 "dependencies": {
    "body-parser": "^1.15.1",
    "express": "^4.16.3",
    "http-server": "^0.11.1",
    "jsonwebtoken": "^7.4.3",
    "pg": "^4.5.6",
    "pg-hstore": "^2.3.2",
    "sequelize": "^3.23.3"
  },
```
Run npm update.

### Add JWT to the User file

TODO: quick explain import the package into the user model.....
```js
var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken');
```

