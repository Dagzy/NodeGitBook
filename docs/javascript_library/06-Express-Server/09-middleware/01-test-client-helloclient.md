# TEST CLIENT SCRIPTS
---
In this module we're going to start adding the JavaScript functions that will make client-side requests to our server. 

<hr />

### Overview
So far we've been using Postman to test all of our endpoints. Postman is great, but we want to see how to get the data and start showing it in the DOM. Again, we're just keeping the DOM stuff in a simple table for now. We can worry about prettying things up another day.

### Server addition
Let's add something in our server a little extra in our server:
1. Go to your `testcontroller.js` file.
2. Add the following route:

```js
/************************
 * GET:  Get simple message from server
 ***********************/
router.get('/helloclient', function (req, res) {
  res.send('This is a message from the server to the client.')
})
```

<hr />

### 01-scripts.js
Let's move over to the client side and add a function to the `01-scripts.js` file:

```js
/********************
 * 
 * HTTP REQUESTS
 * 
 ********************/
/*******************************
 * #1 GET: /helloclient
********************************/
function fetchHelloDataFromAPI() {
	fetch('http://localhost:3000/test/helloclient', {
		method: 'GET', 
		headers: new Headers({
		  'Content-Type': 'application/json'
		})
	})
		.then(function (response) {
			console.log("Fetch response:", response)
			return response.text();
		})
		.then(function (text) {
			console.log(text);
		});
}

```

### Analysis
TODO: Quick breakdown of the function with numbers.....

Use this but label the stuff above with numbers.....
In this function, we're fetching data from the `/test/helloclient` endpoint. Many, if not most, APIs use a similar endpoint for initial testing, which will usually hold a set value. This allows us to ensure that the server is working before we start pulling information from a database. We also use the `Headers()` constructor object to hold our headers, which we'll talk more about in a later module. Finally, we use the `.text()` method here instead of the `.json()` method as we're only returning a single string.


### Test
Let's test it by doing the following:
TODO: Make these directions very clear. Need to add instructions about the ability to have two consoles in VS Code. Up until now, they have not done that....Below is just a start....
1. Start the server side using `nodemon app.js`.
2. Start the client side using `http-server`.
![screenshot](assets/01-testclientsuccess.PNG)



#### postData()
This function will allow us to add content to the database instead than just retrieving it. We have a pre-defined object that we pass into the `fetch` with the `body` property. Notice that the `method` property is now `POST` instead of `GET`. Our response is printed to the console, then also displayed to the user along with the timestamp.
