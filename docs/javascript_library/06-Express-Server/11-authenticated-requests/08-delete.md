# DELETE
---
In this module, we'll write a method to delete a single item in the database. 

<hr />

### CODE
Add the following method to the `03-auth-test.js` file:

```js
function deleteItem() {
	let postIdNumber = document.getElementById("deleteNumber").value;

	const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}` //1
	const accessToken = localStorage.getItem('SessionToken')

	const response = fetch(fetch_url, {
		method: 'DELETE', //2
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken
		}
	})
		.then(response => { //3
			console.log(response); 
			fetchAllFromAuthRoute()
		})
}
```

### Analysis
This method is simple so far. Let's do three simple explanations.
1. Again we get the `id` number submitted by the user and pass it into the url via a template literal.  
2. Our HTTP verb is DELETE in this case, so we use the `DELETE` method.
3. We print the response to the console and also run the `fetchAllFromAuthRoute` function again, which will print all remaining items for our user to the console.

<hr />

### Test
1. Run the client and server.
2. Run Step 9 (Authenticated Request) first to print the current contents of the database to the console. This will show you the `id` value for each item. 
3. Enter the `id` number for the entry you want to delete into the field in step 13, then click `Delete Single Item`.
4. You should see the following response:
![screenshot](assets/08-delete.PNG)
5. You can see both the response to the `DELETE` request and the contents of the database after the item was deleted. Refresh your database to make sure that it worked properly.