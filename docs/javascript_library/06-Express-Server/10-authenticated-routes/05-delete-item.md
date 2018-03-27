# DELETE AN ITEM
---

```js
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
```