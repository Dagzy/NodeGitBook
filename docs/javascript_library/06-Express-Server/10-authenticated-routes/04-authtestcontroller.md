# AUTHTESTCONTROLLER
---
In this module we'll add a new controller that requires a user token for all requests.

<hr />

### Overview 
We are going to add a number of endpoints/routes in this controller. We are going to give you all of this code and will be analyzing it in the future.

### Code
1. Inside the `authtestcontroller.js` file inside of the `controllers` folder, then add the following code:

```js
var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/getall', function (req, res) {
	var userid = req.user.id;

	AuthTestModel
		.findAll({
			where: { owner: userid }
		})
		.then(
			function findAllSuccess(data) {
				res.json(data);
			},
			function findAllError(err) {
				res.send(500, err.message);
			}
		);
});

/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/create', function (req, res) {
	var owner = req.user.id;
	var authTestData = req.body.authtestdata.item;

	AuthTestModel
		.create({
			authtestdata: authTestData,
			owner: owner
		})
		.then(
			function createSuccess(authtestdata) {
				res.json({
					authtestdata: authtestdata
				});
			},
			function createError(err) {
				res.send(500, err.message);
			}
		);
});

/******************
* GET SINGLE ITEM FOR INDIVIDUAL USER
******************/
router.get('/:id', function(req, res) {
	var data = req.params.id;
	var userid = req.user.id;

	AuthTestModel
		.findOne({
			where: { id: data, owner: userid }
		}).then(
			function findOneSuccess(data) {
				res.json(data);
			},
			function findOneError(err) {
				res.send(500, err.message);
			}
		);
});

/******************
* UPDATE ITEM FOR INDIVIDUAL USER
******************/
router.put('/update/:id', function(req, res) {
	var data = req.params.id;
	var authtestdata = req.body.authtestdata.item;

    AuthTestModel
    	.update({
    		authtestdata: authtestdata
    	},
    	{where: {id: data}}
    	).then(
    		function updateSuccess(updatedLog) {
				res.json({
					authtestdata: authtestdata
				});    		},
    		function updateError(err){
    			res.send(500, err.message);
    		}
    	)
});

/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
router.delete('/delete/:id', function(req, res) {
	var data = req.params.id;
	var userid = req.user.id;
	
	AuthTestModel
		.destroy({
			where: { id: data, owner: userid }
		}).then(
			function deleteLogSuccess(data){
				res.send("you removed a log");
			},
			function deleteLogError(err){
				res.send(500, err.message);
			}
		);
});

module.exports = router;
```

### Short Analysis
Although there are nuances that we'll discuss, the functions should seem somewhat familiar to you, based on our previous server functions. Here is a quick explanation for a few of them:

|Function|Purpose|
|:--------|:------|
|/item    |Finds all items in the table with the user id in the token|
|/item/:id|Finds a single item in the the table. Uses both the id from the url (primary key) and the userid from the token (foreign key).|
|/create  |Adds an item to the table with the user id from the token.|

<hr>

Now that our setup is done, let's test out our new routes.