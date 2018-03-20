# APP.JS UPDATE
---
We added some routes to `app.js` earlier, but didn't cover what was really happening there. In this module we'll add to the `app.js` file, giving it the ability to use middleware. We'll also try testing out the additional routes we added earlier, as well as use the test client to see how the client and server sides work together.

<hr />

### Referencing the middleware
We exported the middleware, now we need to use it when we spin up our server. Follow the steps:
1. Go into `app.js`.
2. Add the following code under the `bodyParser` variable:

```js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//1
app.use(require('./middleware/headers'));

//2
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

```
### Analysis
1. When we say `app.use`, we're TODO: explain
2. We're going to make a path localhost:3000/api/test. TODO: Explain.

### Testing
Let's use Postman to test this api use the following steps:
1. Start the server using `nodemon app.js`.
2. Open up Postman.
3. Enter the URL:
`http://localhost:3000/api/test`
4. Press send in Postman. 
5. You should see the following result:

![screenshot](assets/3-api-test-success.PNG) 

### Test Client
Now that we've seen how the routes work, let's try the ones we added earlier for our test client. Your server should still be running, so we just need to start the client. Open up a new terminal window. Navigate to your client folder and run `http-server`. Go to your client and try clicking on the buttons. You should see the text change when you click the button. We are finally displaying the response we've received back from our server!

### Further Study
Look at this picture of the client-server relationship:
![client-server](assets/1-client-server-test-diagram.png) <br>
Explain the entire process, from the client creating of the request to receiving the response back from the server.

### CHALLENGE
The `resident` property in our JSON object is an array that contains two items, but only one is being displayed. Fix this so that both items are displayed properly.