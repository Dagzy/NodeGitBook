# GET SINGLE ITEM
---
In this module we'll write a GET request that grabs a single item from the database for a specific user.

<hr />

### CODE
Add the following method to the `03-auth-test.js` file:

```js
/***************************************
 * GET ITEM BY USER
*************************************/
function getOneByUser() {
	const fetch_url = `http://localhost:3000/authtest/4` // <-----Add your id number here. Ours was 4.  //1
	const accessToken = localStorage.getItem('SessionToken')  

	const response = fetch(fetch_url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => {
			return response.json();

		})
		.then(function (response) {
			console.log(response); 
			var myItem = document.querySelector('section.auth-test-put');  //2
			var inputItem = document.createElement('input');  //3
			inputItem.setAttribute("id", "auth-put");  //4
			inputItem.value = response.authtestdata; //5
			myItem.appendChild(inputItem); //6
		})
}
```

### Analysis
1. We add our own individual id numbers to the url. Because we are making an authenticated request, this id has to exist for the user that you are using currently. The user that has a token stored in your localStorage.
2. We target an element inside of a section with a class name of `auth-test-put`.
3. We create an element called `inputItem`. It's an `input` tag.
4. On the `input` tag we call `setAttribute`. This function will allow us to set an id or a class on an element. We set the `id` on this element, and we give it an id name of `auth-put`. We'll target this later. 
5. We get the value of `response.authtestdata` and store this in the `input` element. This means that the data will be populated in the input field when the DOM loads.
6. We call `appendChild()` on the `myItem` element. This means that we're adding the `input` element into the `section` element with an id of `auth-test-put`.

<hr />

### Test
1. Go ahead and run the app. 
2. CLick the `Get Single Item` button. 
3. You should see the following:
![screenshot](assets/06-get-single.PNG)
4. Notice that we have pulled the single item from the server. In our case, the item has the id of '4'. 
5. Also, notice that we have created and populated an input element in Step 11. It is showing the data that we have pulled in from the  server. We'll work on the update method next.