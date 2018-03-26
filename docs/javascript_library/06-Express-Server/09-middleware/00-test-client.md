# TEST CLIENT
---
In this module we're going to set up a Test Client for testing our requests. 

<hr />

### File Structure
```
    └── 7-Express Server
            └── server
            └── client
                └── index.html
                └── scripts.js
```
<hr>

### index.html
Copy the following code into the `index.html` file. Before we talk more about it, use what you learned previously about client-side programming and see if you can guess what this code is doing:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic Client</title>
</head>
<body>

    <hr /> 
    
    <h1>Console Data</h1>
    <button onclick="fetchHelloDataFromAPI();">Hello Client</button>
    <p id="para">The data will be in the console.</p>

    <hr /> 
    
    <h1>GET Fetch from endpoint /one</h1>
    <button onclick="fetchFromOne();">Fetch from one</button>
    <p id="one">Check the console.</p>

    <hr /> 
    
    <h1>GET Fetch from endpoint /one</h1>
    <button onclick="fetchFromOneCondensed();">Fetch from /one condensed method</button>
    <p id="one">Check the console.</p>
  
    <hr /> 
    
    <h1>Fetch json example</h1>
    <button onclick="fetchFromOneDisplayData();">Fetch from /one display data</button>
    <ul>
    </ul>
    
    <hr /> 

    <h1>Post Data Starter</h1>
    <button onclick="postData();">Post Data</button>
    <div>
        <p>This will show the recently posted data: <span id="test-data"></span></p>
        <p>This was created at: <span id="created-at"></span></p>
    </div>

    <hr />

    <h1>Sign Up</h1>
    <input type="text" id="user" />
    <input type="text" id="pass" />
    <button onclick="userSignUp();">Submit</button>

    <hr />
    
    <h1>Show Session Token in the Console</h1>
    <button onclick="printSessionToken();">Print the token</button>
  
    <script src="scripts.js"></script>
</body>
</html>

```

<br>
We have several different things we can test. A couple print to the console, some add to the database, some retrieve data from the database, and a couple do more than one of these. This should be a good sample of tests for us to run to test our connection.

### scripts.js
Enter the following code into the `scripts.js` file. There's a lot here, so we're gonna break it into two sections, then focus on each individual function.

```js
/********************
 * 
 * HTTP REQUESTS
 * 
 ********************/


/*******************************
 * GET REQUEST: /helloclient
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

/******************************
 * FETCH/GET long hand: /one - GET
 *****************************/
function fetchFromOne(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){
			return response.json()
		})
	.catch(
		function(error){
			console.error('Error:', error)
		})
	.then(
		function(response){
			console.log('Success:', response);
		})
}

/***************************************
 * FETCH/GET from /one : Arrow Function
*************************************/
function fetchFromOneCondensed(){
	var url = 'http://localhost:3000/test/one';
	
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(res => res.json())
	.catch(error => console.error('Error:', error))
	.then(response => console.log('Success:', response));
}

/***************************************
 * FETCH/GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData(){
	let url = 'http://localhost:3000/test/one';
	let dataView = document.getElementById('display-one');
	fetch(url, {
	  method: 'GET', 
	  headers: new Headers({
		'Content-Type': 'application/json'
	  })
	}).then(
		function(response){
			return response.json()
		})
	.catch(
		function(error){
			console.error('Error:', error)
		})
	.then(
		function(response){
			let text = '';
			var myList = document.querySelector('ul');

			for (r of response){
				var listItem = document.createElement('li');
				listItem.innerHTML = r.testdata;
				//Console logs for lessons
				// console.log('T:', r.testdata);
				// console.log("TEXT:", text);
				myList.appendChild(listItem);
			}
		})
}
```

#### fetchHelloDatafromAPI()
In this function, we're fetching data from the `/test/helloclient` endpoint. Many, if not most, APIs use a similar endpoint for initial testing, which will usually hold a set value. This allows us to ensure that the server is working before we start pulling information from a database. We also use the `Headers()` constructor object to hold our headers, which we'll talk more about in a later module. Finally, we use the `.text()` method here instead of the `.json()` method as we're only returning a single string.

#### fetchfromOne()
This time, we're fetching data from the `test/one` endpoint, which will pull from the database instead of a pre-defined value. We chain promises together to create the a flow chart for our `fetch`: If successful, perform the action in the second `.then()`. If not, go to the `catch()`. Just another way of handling errors.

#### fetchFromOneCondensed()
This is the same function as the one above it, only we use arrow functions instead of callbacks. You can see how much more simplified and easier to read this can be, saving us from potential "Callback Hell".

#### fetchFromOneDisplayData()
The last couple of functions received data back from the database and printed it to the console. This time, we actually display that data. We use a `for of` loop to iterate through the response object and create an `<li>` element for each item, which are then added to the `<ul>` object to be shown to the user.
<hr>

### scripts.js Part 2

```js
/*************************************
 * POST w/ fetch() and the Test Data
**************************************/
function postData() {
	let content = { testdata: { item: 'This was saved to the DB' } };
	let testDataAfterFetch = document.getElementById('test-data');
	let createdAtAfterFetch = document.getElementById('created-at');

	fetch('http://localhost:3000/test/seven', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(content)
	})
	.then(response => response.json())
	.then(function (text) {
		console.log(text);
		testDataAfterFetch.innerHTML = text.testdata.testdata;
		createdAtAfterFetch.innerHTML = text.testdata.createdAt;
	});
}


/**********************************************
 * POST w/ fetch() and the Test Data - This works for creating a user in Postgres
***********************************************/

function userSignUp(){
	let userName = document.getElementById('user').value;
	let userPass = document.getElementById('pass').value;
	console.log(userName, userPass);

	let newUserData = {user : { username: userName, password: userPass}};
	fetch('http://localhost:3000/api/user/createuser', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUserData)
	})
	.then(response => response.json())
	.then(function (response) {
		console.log(response.sessionToken);
		let token = response.sessionToken;
		sessionStorage.setItem('SessionToken', token);
	});
}

function printSessionToken(){
	var data = sessionStorage.getItem('SessionToken');
	console.log(data);
}
```

#### postData()
This function will allow us to add content to the database instead than just retrieving it. We have a pre-defined object that we pass into the `fetch` with the `body` property. Notice that the `method` property is now `POST` instead of `GET`. Our response is printed to the console, then also displayed to the user along with the timestamp.

#### userSignup()
This time, we take the username and password supplied by the user and create the object `newUserData` to hold them, which is then passed into the `body` property. Notice how both callback and arrow functions are used in the promise chain as another demonstration that both can be used interchangeably. Finally, we print the `sessionToken` received back in the response to the console, then store it inside of `localStorage`.

#### printSessionToken()
This function looks for a key of `SessionToken` inside of `localStorage`, then prints the value to the console. If no key by that name is present, `null` will print instead. 

### localStorage
One thing we haven't talked about yet is `localStorage`. This is a little bit of storage space on the client's machine where things can be held for later use. This is the perfect spot to store our session token. Remember the statelessness of HTTP requests. Since the server needs the session token with every request, the client can store it to add to every request. For more information on `localStorage` and other things you can do with it, look at the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

Now that our setup is out of the way, we can dive into the concept of middleware and see how it interacts with both the client and the server.