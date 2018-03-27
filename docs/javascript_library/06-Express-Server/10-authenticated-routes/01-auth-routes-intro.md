# AUTHENTICATED ROUTES
---
In this module we'll begin working with Authenticated routes by creating form that access our `/createuser` route.

<hr />

### Overview
From Postman we have the ability to create an account, log into an account, and receive a token. In a little while we will use those routes in the DOM. However, for now, let's do some server work and prepare it for authenticated requests. 

We need to write a middleware function that acts as a gate between the client and the server. This middleware is going to look for and look at our token in the request. If the request has a token, it's allowed to pass through the gate to reach the server and get data from Postgres to be returned or saved for a specific user. If not, the request is rejected. 


TODO: I moved the other stuff. We need to briefly discuss what an authenticated route is.

Let's do a little bit of server setup now, then make some changes to our client.

### server/models/authtest.js
In order to try out using authenticated routes, we need a new table in our database that we can place behind an authentication barrier. Follow these steps:

1. In the `models` folder in the server, add an `authtest.js` file. 
2. Add the following code inside of the file:
```js
module.exports = function(sequelize, DataTypes) {
            return sequelize.define('authtestdata', {
                authtestdata: DataTypes.STRING,
                owner: DataTypes.INTEGER
            });
    };
```

3. Notice that we will be providing two properties: `authtestdata` and `owner`.
4. Think of `authtestdata` as a string like test data.
5. The `owner` is a number, a foreign key, that will point to a specific user on the users table. 