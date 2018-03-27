# CLIENT SETUP
---
In this module we'll add a client method for creating a user. 

<hr />

### User Scripts
Please add a `02-user-scripts.js` file inside of the client folder:

```
    └── 5-Express Server
            └── server
            └── client
                └── 01-scripts.js
                └── 02-user-scripts.js
                └── index.html
```
We'll add some of our auth logic in there.

### Script Tags
Follow these steps to wire up the `js` file:
1. Go to `index.html`.
2. Go to the bottom, under the Bootstrap scripts and add the `02-user-scripts.js` tag like this:

```html

    <script src="01-scripts.js"></script>
    <script src="02-user-scripts.js"></script>

</body>

</html>

```

### userSignUp
At the top of this new script file,`02-user-scripts.js`, let's add the code for signing up a user:

```js
/********************
 * POST - /createuser
*********************/

function userSignUp(){
	let userName = document.getElementById('user').value; //1
	let userPass = document.getElementById('pass').value;
	console.log(userName, userPass);

	let newUserData = {user : { username: userName, password: userPass}}; //2
	fetch('http://localhost:3000/api/user/createuser', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUserData) //3
	})
	.then(response => response.json())
	.then(function (response) {
		console.log(response.sessionToken);
		let token = response.sessionToken; //4
		localStorage.setItem('SessionToken', token);  //5
	});
}
```

### Analysis
TODO: Explain clearly.
1. grab data from input field.
2. package up the user object. The variables used to store the sign up info from the DOM get passed into the values of the `username` and `password` properties.
3. Pass the user object into the request body. 
4. Get the token from the response. Store it in a `token` variable.
5. Call the `setItem` function and store the token in localStorage.

### Test
TODO: Screenshot and more clear instructions....
1. Let's run the client and server again. 
2. Sign up with a new user. You should see the following:

![screenshot](00-create-user.PNG)