const router = require('express').Router();
const sequelize = require('../db.js');
const Log = sequelize.import('../models/log');
const User = sequelize.import('../models/user.js');

router.post('/', function(req, res) {
	let description = req.body.log.desc;
	let result = req.body.log.result;
	let user = req.body.log.id;
	let definition = req.body.log.def;

	Log
		.create({
			description: description,
			result: result,
			owner: user,
			def: definition
		})
		.then(
			function createSuccess(log) {
				res.json(log);
			},
			function createError(err) {
				res.send(500, err.message)
			}
		);
});

router.get('/', function(req,res) {
	let userid = req.user.id;

	Log
	.findAll({
	where: {owner: userid}
	})
	.then(
		function findAllSuccess(data){
			res.json(data);
		},
		function findAllError(err){
			res.send(500, err.message);
		}
	);
});

//This will retrieve one workout specified by the log id
router.get('/:id', function(req, res) {
	let data = req.params.id;

    Log
		.findOne({
			where: {id: data}
		}).then(
		function getSuccess(updateData) {
			res.json(updateData);
		},
		function getError(err) {
			res.send(500, err.message)
		}
	);
})

//Search for workouts of a specific type for a single user
router.post('/search/:id', function(req, res){
    let id = req.params.id;
    let query = req.body.log.search;

    Log
        .findAll({ where: {owner: id, description: query}})
        .then(
            function getSuccess(updateData) {
                res.json(updateData);
            },
            function getError(err) {
                res.send(500, err.message)
            }
        );
})

//this will return the data from the log that was updated
router.put('/', function(req, res) {
	let description = req.body.log.desc;
	let result = req.body.log.result;
	let data = req.body.log.id;
	let definition = req.body.log.def;

    Log
	.update(
		{
			description: description,
			result: result,
			def: definition
		},
		{where: {id:data}}
	).then(
		function updateSuccess(updatedLog) {
			res.json(updatedLog);
		},
		function updateError(err) {
			res.send(500, err.message);
		}
	)
})

router.delete('/', function(req,res) {
	let data = req.body.log.id;
	Log
		.destroy({
			where: {id: data}
		}).then(
		function deleteLogSuccess(data) {
			res.send("you removed a log");
		},
		function deleteLogError(err) {
			res.send(500, err.message);
		}
	)
});

module.exports = router;