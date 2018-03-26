# fetchFromOne() Method
---
TODO: In this module we'll write a 
<hr>

### Scripts

```js
router.get('/one', function(req, res) {

  TestModel
	.findAll({
    attributes: ['id', 'testdata']
	})
	.then(
		function findAllSuccess(data) {
			console.log("Controller data:", data);
			res.json(data);
		},
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});

```
### fetchfromOne()

TODO: Use the text below but organized annotations and any new additions like attributes: 


This time, we're fetching data from the `test/one` endpoint, which will pull from the database instead of a pre-defined value. We chain promises together to create the a flow chart for our `fetch`: If successful, perform the action in the second `.then()`. If not, go to the `catch()`. Just another way of handling errors.

<hr>

### Test
TODO: Quick review of client/server start steps.
TODO: Screenshots for success in the console....


