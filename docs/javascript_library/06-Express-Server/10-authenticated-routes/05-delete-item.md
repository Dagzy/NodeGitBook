# DELETE AN ITEM
---

Deleting a post isn't as simple as most sites make it seem. Click an `X` or `delete post` and it's magically done, right? If only.

### The Code
Add the following function to the bottom of your `authtestcontroller.js` file, right above the export statement:

```js
/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
		//1				//2
router.delete('/delete/:id', function(req, res) {
	var data = req.params.id; //3
	var userid = req.user.id; //4
	
	AuthTestModel
		.destroy({ //5
			where: { id: data, owner: userid } //6
		}).then(
			function deleteLogSuccess(data){ //7
				res.send("you removed a log");
			},
			function deleteLogError(err){ //8
				res.send(500, err.message);
			}
		);
});
```

### Analysis
What did we just do?
1. When a `DELETE` request is received, the controller looks for a matching function, like what the rest of the HTTP verbs do.
2. We specify what we're doing in our endpoint to make it easy for the user to know what's happening. The `:id` allows a parameter to be passed through the URL to the server so we can use it later.
3. This is the parameter passed through the URL. The same way `req.body` points to the body of the request, `req.params` points to the URL.
4. This is our `userid`, set when `validate-session` is called.
5. `.destroy()` is a Sequelize method to remove an item from a database. See the [Sequelize docs](http://docs.sequelizejs.com/) for more information.
6. We tell Sequelize what to look for in trying to find an item to delete. If nothing matches exactly, nothing is done.
7. Callback function. This response is sent when the delete is successful.
8. Callback function. This response is sent when the delete is unsuccessful.