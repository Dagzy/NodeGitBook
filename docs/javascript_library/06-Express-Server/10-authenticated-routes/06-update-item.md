# UPDATE AN ITEM
---

```js
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
```