# SIGN IN
---
In this module we'll start making the sign in method.

<hr>

### The code
Let's create our signin route. Add the following to the bottom of `usercontroller.js` file in `usercontroller.js`. Like the signup route, each step will keep building on top of the previous, until we have the finished product at the end.

```js
		//7
router.post('/signin', function(req, res) {
            //1     //2       //3                                   //4
	User.findOne( { where: { username: req.body.user.username } } ).then(
    
        //5
        function(user) {
            console.log(user);
		},
		//6
		function(err) {
			res.json(err);
		}
	);
});

```
### Analysis
1. The `findOne()` method is a sequelize method that does exactly what it says: it tries to find something within the database that we tell it to look for. This is called Data retrieval. Check out the Sequelize docs [here](http://docs.sequelizejs.com/manual/tutorial/models-usage.html).
2. `where` is an object within sequelize that tells the database to look for something matching its properties.
3. We're looking in the `username` column in the `user` table for something that matches the value passed from the client.
4. The promise is handled within `.then()`.
5. Function called when the promise is resolved. We print the user to the console.
6. Function called when the promise is rejected. We print the error to the console. 

### Test
Start your server and open Postman. Send a request to the `signin` route with the username of one of the users in your database. This needs to be a user that you've already created.  You should see the user object print to the console:
![screenshot](assets/01-signin-user.PNG)

 <br>
Send another request, this time with a user not in the database. You should see something like this:
![Fail](assets/01-signin-no-user.png) <br>