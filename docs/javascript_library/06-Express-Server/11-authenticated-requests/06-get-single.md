# GET SINGLE ITEM
---

<hr />


```js
/***************************************
 * FETCH/GET ITEM BY USER
*************************************/

function getOneByUser() {
	const fetch_url = `http://localhost:3000/authtest/15`
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			return response.json();

		})
		.then(function (response) {
			console.log(response);
			var myItem = document.querySelector('section.auth-test-put');
			var inputItem = document.createElement('input');
			inputItem.setAttribute("id", "auth-put");
			inputItem.value = response.authtestdata;
			myItem.appendChild(inputItem);
		})
}
```