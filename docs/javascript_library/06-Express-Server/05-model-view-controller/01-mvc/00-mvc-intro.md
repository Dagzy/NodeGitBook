# PERSISTING DATA
---

In this chapter, we'll walk through several modules that will teach how to build controller methods and routes that make POST requests containing data. Those requests will post data that will persist in our Postgres database and return that data to the client in a response. To write this code we'll use a Model View Controller pattern, so we'll introduce you to MVC at this time.

<hr>

### The Model View Controller Software Pattern
 MVC is a common software pattern found in many programming languages and applications. Take a look at a diagram of MVC to start getting an idea of how it works:

![screenshot](assets/02-mvc.png)

### Views
For this chapter, we won't be dealing with the view, but we'll say that the view/client would be sending requests, receiving responses, and working to display the data to users. For a temporary client we'll use Postman in lieu of a View.

### Controllers
It's good to think of the controller as something that handles the heavier logic in the application. A controller is usually a method or methods that will handle some or all of the following things:

1. Receiving the incoming request depending on the route.
2. Processing the type of incoming request: GET, POST, PUT, DELETE.
3. Collecting the data from the incoming request.
4. Working with the model to ensure that the request data matches the types in the model and the database. 
5. Creating, updating, reading, or deleting objects in the database. 
6. Sending off the response for the incoming request. 

### Models
Coding models are usually considered to be just this: `representations of the data being handled`. Models can do the following:
1. Represent the data being stored in the database. 
2. Dictate the types of data that will be stored(string, boolean, integer)
3. Handle some basic business logic in an application, for instance, character limit for a string being stored in the db, formatting for date and time details, and many other things that shape the data in the database.
4. Used by the controller to handle logic.

### Endpoints & Routes
As mentioned in a previous module, when an HTTP request comes in, it hits a route and finds the proper endpoint. When the router finds the proper endpoint, the proper controller method is fired, and the controller method handles any necessary logic. To practice learning about endpoints, controllers, and models, we'll be building the following endpoints in the modules ahead:

```
http://localhost:3000/test/one - POST 
http://localhost:3000/test/two - POST
http://localhost:3000/test/three - POST
http://localhost:3000/test/four - POST
http://localhost:3000/test/five - POST
http://localhost:3000/test/six - POST
http://localhost:3000/test/seven - POST
```

When we start up our server each of these will be available for processing a request. We'll work with each one as a way to learn the process of writing a controller method.

Before we fire off controller methods, we'll start by building some data models.





