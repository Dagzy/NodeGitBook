# MIDDLEWARE Setup
In this module, we'll use Express to begin allowing CORS for client and server request/response cycle. 

<hr />

### Headers
Headers are sent by the client along with the request. They contain special instructions for the server. For more information on headers and CORS, take a look at the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). A word of caution: there is a lot of information packed into this page, and much of it focuses on things that we haven't covered yet. Take it slow and do your own research, too.

1. Go into the server folder, create a new folder called `middleware`, and add the following files:
```
    └── 5-Express Server
            └── server
                └── controllers
                └── middleware
                    └── headers.js                
                └── models
            └── client
```
2. Go into `headers.js` and add the following code:
```js
 //1                        //2
module.exports = function(req, res, next){
    //3                    //4
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //5
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //6
    //7
	next();
};
```

### Analysis
1. `module.exports` allows us to export this module to be used in another file.
2. `req` refers to the request from the client, specifically focusing on any headers present on the request object. `res` refers to the response and will be used to present which types of headers are allowed by the server. `next` will be covered more in a moment.
3. We call `res.header` so that the server will respond with what kind of headers are allowed in the request.
4. We use the specific `access-control-allow-origin` header to tell the server the specific origin locations that are allowed to communicate with the server. The `*` is known as a `wild-card`. It means that everything is allowed. In this setting, it's saying that requests originating from any location are allowed to communicate with the database.
5. These are the HTTP methods that the sever will allow to be used. Postman allows you to send 15 different HTTP requests; our server will only accept these four.
6. These are specific header types that the server will accept from the client. Remember from our earlier testing we sent a `Content-Type` header to the server. Without this header, our request would not have worked. You can find more information on this and other headers on MDN, and we will talk about them more in the future as well. 
7. `next` sends the request along to its next destination. This could be the API endpoint or another middleware function designed to do something else. Let's talk a little bit more about `next`.


### next() 
`next()` tells the middleware to continue its process. With the above example, `next()` takes the request object and passes it on the endpoint on the server. Not including the `next()` would cause the application to break, as the server doesn't know what to do after sending the header. We could also use `next()` to provide additional headers if we want further restrictions on our server.