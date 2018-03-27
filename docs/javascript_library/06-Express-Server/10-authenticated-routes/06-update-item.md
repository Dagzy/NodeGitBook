# UPDATE AN ITEM
---

Many great apps and sites do not have the ability to update things that have been posted, such as Twitter and Snapchat. These are known as CRD apps. We want a full CRUD app, however, so let's get to work. This is the last major addition we need for our server to be complete.

### The Code
Add the following at the bottom of `authtestcontroller.js`, right above the export statement.

```js
/******************
* UPDATE ITEM FOR INDIVIDUAL USER
******************/
	   //1    //2
router.put('/update/:id', function(req, res) {
	var data = req.params.id; //3
	var authtestdata = req.body.authtestdata.item; //4

    AuthTestModel
    	.update({ //5
    		authtestdata: authtestdata //6
    	},
    	{where: {id: data}} //7
    	).then(
    		function updateSuccess(updatedLog) { //8
				res.json({
					authtestdata: authtestdata
				});    		
			},
    		function updateError(err){ //9
    			res.send(500, err.message);
    		}
    	)
});
```

### Analysis
1. `PUT` is one of the HTTP verbs that has to be weird and not just tell you what it does. `PUT` replaces whatever is already there with what we give it. In other words, `PUT` means update.
2. To make it easier on the user, we use update in our route. We also allow a variable to be passed through the URL again.
3. The parameter taken from the URL.
4. Our data we want to put into the database, replacing what already exists.
5. `update` is a Sequelize method which takes two arguments.
6. First argument of `update`. Contains an object holding the new value we want to edit into the database.
7. Second argument of `update`. Tells Sequelize where to place the new data if a match is found.
8. Callback function. Runs if update is successful and returns the data entered.
9. Callback function. Runs if update is not successful and returns the error message.

And that's it! Our server is done! Let's do some final testing with Postman, then move on to setting up our client to navigate these authenticated routes.