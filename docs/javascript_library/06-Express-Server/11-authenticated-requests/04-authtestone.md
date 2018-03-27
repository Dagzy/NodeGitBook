# AUTH TEST
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
                └── 03-auth-test.js
                └── index.html
```
We'll add all of our authenticated request logic in there.

### Code
Add the following code to `03-auth-test.js`:

```js
/***************************************
 * GET from /authtest/one
*************************************/
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


### Test
TODO: Run in HTML. Explain.
