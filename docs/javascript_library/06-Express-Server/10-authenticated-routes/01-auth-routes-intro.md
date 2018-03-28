# AUTHENTICATED ROUTES
---
In this module, we'll begin working with Authenticated routes by creating routes that require a valid token to access.

<hr />

### Overview
From Postman we have the ability to create an account, log into an account, and receive a token. In a little while we will use those routes in the DOM. However, for now, let's do some server work and prepare it for authenticated requests. 

### What is an Authenticated Route?
An authenticated route is another way of saying a **protected** route. There are parts of our database and site that we only want certain people to be able to access, and even then only parts those people are allowed into. When you login to your email or a site like Facebook, you're being taken to an authenticated route: your email inbox, your facebook feed, etc. While their authentication processes are undoubtedly far more advanced and complicated than what we'll do, the idea is the same: keeping out any unauthorized traffic or malicious users.

### How Do We Do It?
We need to write a middleware function that acts as a gate between the client and the server. This middleware is going to look for and look at our token in the request. If the request has a token, it's allowed to pass through the gate to reach the server and get data from Postgres to be returned or saved for a specific user. If not, the request is rejected. <br>

Think back to the example about the bar from earlier. In this context, the bar is the route we want to authenticate. After you pay your cover and get your stamp, you go inside and order a drink from the bartender. First, the bartender has to check that you have a stamp, then check your ID to make sure that you're old enough to drink. This second step is the new middleware function that we're going to create: validation. <br>

We can even take this one step further: Let's say the bar uses different stamps for different nights of the week. The doorman was only checking to make sure that you had a stamp; the bartender will check to make sure it's TONIGHT's stamp, and not the previous night's. Remember than when we create our tokens we give them an expiration date, so our new middleware function needs to not only verify that the token belongs to the user that it was assigned to, but also verify that the token is still valid.

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
4. Think of `authtestdata` as a string, like `testdata`.
5. The `owner` is a number, a foreign key, that will point to a specific user on the users table. 