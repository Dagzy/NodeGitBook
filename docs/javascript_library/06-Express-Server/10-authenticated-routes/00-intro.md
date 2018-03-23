# AUTHENTICATED ROUTES
---
TODO -
1. Protecting routes by requiring a token 
2. fetch issues/differences
3. OPTIONS request before GET request
4. CORS

### models/authtest.js
Create the `authtest.js` file inside of the `models` folder and add the following inside it:
```js
module.exports = function(sequelize, DataTypes) {
            return sequelize.define('authtestdata', {
                authtestdata: DataTypes.STRING,
                owner: DataTypes.INTEGER
            });
    };
```

When we use this model, the only input we provide is `authtestdata`. The `owner` property is taken from the `id` value of the token. We will be using this table to test some things in the next module.