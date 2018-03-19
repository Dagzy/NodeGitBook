# MIDDLEWARE Setup
Ok, enough talk. Time to put middleware into action. In this module we'll use Express to begin allowing CORS for client and server request/response cycle. 

<hr />

### Headers
Headers are sent by the client along with the request. They contain special instructions for the server. For more information on headers and CORS, take a look at the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). A word of caution, however: There is a lot of information packed into this page, and much of it focuses on things that we haven't covered yet. Take it slow and don't worry if it doesn't make any sense.

1. Go into the server folder and create a new folder called `middleware`.
2. Inside the middleware folder, create a file called `headers.js`.
3. Add the following code. Feel free to omit the comment numbers:

```js
 //1                        //2
module.exports = function(req, res, next){
    //3                    //4
	res.header('access-control-allow-origin', '*');
    //5
	next();
};
```

### Analysis
1. `module.exports` allows us to export this headers.js module. The routes in our `controllers` folder use this same method to allow access to the endpoints. 
2. `req` refers to the request from the client, specifically focusing on any headers present on the request object. `res` refers to the types of headers that are allowed by the server. `next` will be covered more in a moment.
3. This contains the header that the server will allow the client to send in the request.
4. We use the specific `Access-Control-Allow-Origin` header to tell the server the specific origin locations that are allowed to communicate with the server. The `*` is known as a `wild-card`; It means that everything is allowed. In this setting, it's saying that requests originating from any location are allowed to communicate with the database.
5. `next` sends the request along to its next destination. This could be the API endpoint or another middleware function designed to do something else. Let's talk a little bit more about `next`.


### next() 
`next()` tells the middleware to continue its process. With the above example, `next()` takes the request object and passes it on the endpoint on the server. Not including the `next()` would cause the application to break, as the server doesn't know what to do after sending the header. We could also use `next()` to provide additional headers if we want further restrictions on our server.