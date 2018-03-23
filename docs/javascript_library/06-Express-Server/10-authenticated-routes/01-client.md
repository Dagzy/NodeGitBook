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
	const fetch_url = `http://localhost:3000/authtest/one`;
	const accessToken = localStorage.getItem('SessionToken') //1

	const response = fetch(fetch_url, {
		method: 'GET', //2
        headers: {
          'Accept': 'application/json', //3
          'Content-Type': 'application/json', //4
		  'Authorization': accessToken, //5
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
1. Since we stored our token in `localStorage`, we use the `getItem` method to get it back from localStorage and put it in a variable.
2. By default, `fetch` runs a `GET` request. We can use the `method` property to send other requests. In this case, we're still sending a `GET`.
3. The `Accept` header tells the server what types of content that the client is able to understand. If multiple are present, the server picks one.
4. The `Content-Type` header tells the server what kind of data is being sent, if any. It can also refer to the type of data the server chooses from the `Accept` header.
5. The `Authorization` header provides some sort of encrypted data allowing acces to the server, in this case our token.