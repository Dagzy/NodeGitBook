# postToOne() Method
---
In this module, we'll write another client side function that access our server. 

<hr>

### Overview
This time, we'll be testing our POST request from the `test/one` endpoint that we already built, which will pull from the database instead of a pre-defined value. We'll chain promises together to create a flow chart for our `fetch`. 

### Scripts
Let's add the function now. It should go directly below the first function in `01-scripts.js`:
```js

/******************************
 * 2 POST long hand: /one 
 *****************************/
function postToOne(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'POST', 			//1
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){   //2
			return response.text()
		})
	.catch(
		function(error){   //3
			console.error('Error:', error)
		})
	.then(
		function(response){   //4
			console.log('Success:', response);
		})
}

```
### Quick Summary
We are not seeing new stuff here, but let's do a quick summary:
1. We are fetching the url. The route in the server handles a `POST` request, so our method type is `POST`. Remember that these two must match. If a route takes a `POST` request, then the declared method in the request should `POST`. 
2. We pass the response into a Promise that returns the response as plain text. (We'll use more JSON later)
3. We handle an error, if an error comes back.
4. In the final `then()`, we simply print the plain text response to the console. This section is where we can do some DOM set up. 

<hr>

### Test

1. Make sure that both your client and server are running.
2. Go to `localhost:8080`
3. Click the `POST to /one` button.
3. You should see the following success message:
![screenshot](assets/06-postToOne.PNG)
