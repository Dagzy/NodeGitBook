# AUTH TEST CREATE
---
In this module we'll make an Authenticated POST request to an authenticated POST route and persist some simple data in the database.

<hr />

### Code
Let's start by adding the following code to `03-auth-test.js`:

```js

/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
	const fetch_url = `http://localhost:3000/authtest/create` 
	const accessToken = localStorage.getItem('SessionToken')

	let authTestDataInput = document.getElementById('authTestData').value; //1

	let authInputData = { authtestdata: { item: authTestDataInput } }; //2

	const response = fetch(fetch_url, {
		method: 'POST', //3
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)  //4
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
		})
}
```

### Analysis
1. We will be using an input field in the DOM for this exercise, so we will grab whatever string that a user passes into that field. 
2. We package that value up into an object. Notice that this is similar to what we did with Postman when posting data to this route. 
3. Note that we are identifying this method as a POST request. If you are struggling with request problems, it's a good idea to take a look at your HTTP verb.
4. We package up the object as a JSON string and add it to the body of our request. 

<hr />

### Test
1. Make sure your client and server are both running.
2. Go to step 9 and enter something into the input field.
3. Press send and check the console. You should see the following response:
![screenshot](assets/05-auth-create.PNG) 