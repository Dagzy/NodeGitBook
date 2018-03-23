# CLIENT SETUP
---

Before we look at the `validate session` file, let's add a little bit of stuff to our client side. This will allow us to test the route later.

### index.html
Add the following above to the bottom of `index.html`, above the `script` tag:

```html
    <hr />

    <h1>Make Authenticated Request</h1>
    <button onclick="fetchFromAuthRouteOne();">Fetch Data From Auth Route One</button>
```
This will give us a way to test the authenticated route once we're ready.

### scripts.js

Next, add this code to the bottom of the `scripts.js` file. We'll talk about it in a moment.

```js
function fetchFromAuthRouteOne () {
	const fetch_url = `http://localhost:3000/authtest/one`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
		  'Authorization': accessToken,
		}
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
More to come later.