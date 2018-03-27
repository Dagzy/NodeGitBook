# AUTH TEST CREATE
---



<hr />

### User Scripts


### Code
Add the following code to `03-auth-test.js`:

```js

/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
	const fetch_url = `http://localhost:3000/authtest/create`
	const accessToken = localStorage.getItem('SessionToken')

	let authTestDataInput = document.getElementById('authTestData').value;

	let authInputData = { authtestdata: { item: authTestDataInput } };
	const response = fetch(fetch_url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
		})
}
```

### Test
TODO: Run in HTML. Explain.