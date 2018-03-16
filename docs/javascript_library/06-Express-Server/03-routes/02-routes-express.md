# EXPRESS ROUTES
---
In this module we'll create a few Express routes. Because an application can have dozens upon dozens of routes, the purpose of this is to help learnt to create and organize our routes properly.

<hr>

### File Set up
Let's start by adding a `routes` folder and a `testroutes.js` file:

```
javascript-library
    └── 7-Express Server
        └── Server
            └── routes
                └── testroutes.js
            └── app.js
```
<hr>
                
### testroutes

1. Go into the `testroutes.js` file.
2. Add the following imports along with the `router.get()` function:

```js
var express = require('express') //1
var router = express.Router()  //2

//3    //4   //5          //6
router.get('/', function (req, res) {
    //7
  res.send('Hey!!! This is a test route!')
});
```

### Analysis
Let's take a look at what this code is doing:
1. We import express and store express inside `var express`, an instance of express for us to use.
2. We create a new variable called `var router`. Since the `express` variable(line 1) gives us access into the express library, we can access express properties and methods by calling `express` + `.`. Therefore, when we call `express.Router()`, we are using the `express` variable to access the `Router()` method. The `Router()` method will return a `route` object for us. You can read about it more at the Express [docs](https://expressjs.com/en/4x/api.html#router). 

3. We use the `router` object. The `router` variable gives us access inot the `Router()` object methods. 
4. `get()` is one of the methods in the object, and we call it. We pass two arguments into the `.get` method.
5. The first argument is the path. In this case, the path is just a `/`. More on this later.
6. The second argument is a callback function. This is also sometimes called a “handler functions”. This function gets called when the application receives a request to the specified route and HTTP method. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
7. Inside our callback function we call `res.send()`. `send()` is an express method that can be called on the `res` or response object. Our response parameter is just a simple string. 

<hr >

### App.js
Before this will work, we have to add bring these routes into `app.js`. 

1. Go to `app.js`.
2. Add the following code:

```js
var express = require('express');
var app = express();
var testRoutes = require('./routes/testroutes')//1

            //2            //3
app.use('/testroutes', testRoutes) 

```

### Analysis
1. We import the route object that we just created and store it in a variable called `testRoutes`.
2. We call `app.use` and in the first parameter we create a base url called `/testroutes`. So our base url will look like this:
`http://localhost:3000/testroutes`
3. For our second parameter for the `use()` function, we pass in `testRoutes`. This means that all routes created in the `testroutes.js` file will be sub-routes. It will look like this:
`http://localhost:3000/testroutes` or `http://localhost:3000/testroutes/`

4. Let's test this now to get a better understanding.

### Test
1. Run the application using `nodemon app.js`.
2. Open Postman.
3. In the url link, add the following route into the Request URL bar:
`http://localhost:3000/testroutes/`

4. Make sure that you have the request set to a GET request and press SEND. When you send, you should get a response like this:
![screenshot](assets/01-testroute.PNG)

<hr />


### Challenge #1
We could talk all day about this, but it won't make sense until you play around. Try the following:
1. Create a route that is the following url:
`http://localhost:3000/testroutes/about`

2. When you test the app in Postman, you should get a response like this:
![screenshot](assets/02-testroute-about.PNG)

