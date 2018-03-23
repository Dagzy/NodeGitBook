# AUTHENTICATED ROUTES
---

We now have the ability log back into an account and receive a token. What should we use that token for? Well, a token in real life allows you passage into somewhere: A train, a subway, a building, or whatever. Here, our token will allow us to access parts of our database that we would otherwise be blocked from. This is handled through authenticated routes.

### How Do We Protect the Routes?
Basically, we write a middleware function that acts as a gate between the client and the server. If request has a token, it's allowed to pass through the gate to reach the server. If not, it's rejected. The response doesn't need to use the gate; it can go around the side of the gate. The request just can't quite figure that out. While it seems like our `fetch` function just puts the token into the request and fires it off, it's actually doing a lot more. Let's take a deeper look at `fetch`.

### What is `fetch` Doing Here?
Before it sends off the request to the server, `fetch` performs a  `CORS`, or `pre-flight` check. `CORS` stands for Cross Origin Resource Sharing. You may have seen this error before while working with the APIs. Think back to our token analogy about the bar and the doorman. Before he gives you the stamp, the doorman checks your id and asks you a couple of questions to make sure that you're allowed into the bar. This is exactly how `CORS` works: before it gets to the server, the request is checked to make sure that whatever it contains is allowed by the server. Previously, we installed an npm package (`cors`) that handled this functionality, but `fetch` eliminates that dependency altogether.

### CORS Request
So what exactly is this initial request? It's a request sent with the HTTP method `OPTIONS`. It doesn't actually send any of the headers you include, but rather checks to make sure those headers are allowed by the server. If everything checks out, the server responds with a `200 OK` and fetch follows with the request it's been given (`GET`, `POST`, etc.). If something's not quite right, an error will be returned, and the second request is never sent. This provides a little extra security for the server by verifying that the request from the client will properly formatted, and also saves time by not sending an invalid request. <br>

Let's do a little bit of server setup now, then make some changes to our client.

### server/models/authtest.js
In order to try out using authenticated routes, we need a new table in our database that we can place behind the authentication barrier. Create the file `authtest.js` inside of the `models` folder and add the following inside it:
```js
module.exports = function(sequelize, DataTypes) {
            return sequelize.define('authtestdata', {
                authtestdata: DataTypes.STRING,
                owner: DataTypes.INTEGER
            });
    };
```

When we use this model, the only input we provide is `authtestdata`. The `owner` property is taken from the `id` value of the token. We will be using this table to test some things in the next module.