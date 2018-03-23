var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

// define the home page route

  router.get('/one', function(req, res) {
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

router.get('/id', function(req, res) {
	var data = req.params.id;
	var userid = req.user.id;

	//console.log(data); here for testing purposes
	AuthTestModel
		.findOne({
			where: { id: data, owner: userid }
		}).then(
			function getSuccess(updateData) {
				res.json(updateData);
			},

			function getError(err) {
				res.send(500, err.message);
			}
		);
});



router.post('/create', function(req, res) {
    var owner = req.user.id;
	var authTestData = req.body.authtestdata.item;

	AuthTestModel
	.create({ 
	   	authtestdata: authTestData,
	   	owner: owner
	   })

		.then(
				function createSuccess(authtestdata) {
				//send a response as json
		   		res.json({
		   			authtestdata: authtestdata
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});


// router.post('/one', function(req, res) {

//     var authTestData = req.body.authtestdata.item;
// 	var user = req.user;

//   	AuthTestModel
// 	    .create({
// 			authtestdata: authTestData,
// 			owner: user.id
// 	    })
// 	    .then(
// 	    	function createSuccess(data) {
// 	    		res.json(data);
// 	    	},
// 		    function createError(err) {
// 		        res.send(500, err.message);
// 		    }
// 	    );
// });

module.exports = router;
