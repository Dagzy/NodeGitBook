# UPDATE ITEM
---
In this module we'll update the item that is returned from the GET request and displayed in the input field. 

### CODE
Add the following code to your `03-auth-test.js` file. 

```js
/***************************************
 * PUT to authtest/update/:id
*************************************/
function updateItem() {
	const fetch_url = `http://localhost:3000/authtest/update/4` //<-----Again, this should be the id of your item. //1
	const accessToken = localStorage.getItem('SessionToken')
	let authTestDataInput = document.getElementById('auth-put').value; //2

	let authInputData = { authtestdata: { item: authTestDataInput } };  //3

	const response = fetch(fetch_url, {
		method: 'PUT', //4
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': accessToken
		},
		body: JSON.stringify(authInputData)  //5
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data)
		})
}
```

1. We reach out to the update endpoint and append our specific id to update. Again, this id should be the same as the last module. 
2. After we set up our accessToken, we create a variable that targets the `auth-put` id. Remember that we created this id in the function in the last module. We add the `.value` property to this so that we can grab the value of what gets entered into the input field.
3. We create an object that packages up our request. We capture the value of `authTestDataInput` and store it in the variable `authInputData` variable.
4. We are doing an update method, so this will be a `PUT` request. 
5. Just like we did in past `POST` methods, we use the `stringify` method to convert the object to a JSON object.

### TEST
1. Make sure that the server and client are running.
2. Press the `GET Single Item` button from Step 10. The input field should populate.
3. Change the text in the input field so that it is something different than what you had.
4. Press the `Update Item` button. 
5. You should see the following response in the console:
![screenshot](assets/07-update-item.PNG)
6. Go ahead and refresh the page. you don't need to turn off the Client or Server.
7. Press the `GET Single Item` button from Step 10. The input field should populate.
8. You should see that the newly updated data in the input field and console message:
![screenshot](assets/07-update-item-2.PNG)
9. We might also suggest that you check in Postgres to be sure that you have successfully added the data to the database.
