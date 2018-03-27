


```js

/***************************************
 * PUT to authtest/update/:id
*************************************/
function updateItem() {
	const fetch_url = `http://localhost:3000/authtest/update/15`
	const accessToken = localStorage.getItem('SessionToken')
	let authTestDataInput = document.getElementById('auth-put').value;

	let authInputData = { authtestdata: { item: authTestDataInput } };
	const response = fetch(fetch_url, {
		method: 'PUT',
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