var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var TestModel = sequelize.import('../models/test');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

router.post('/createuser', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;
	
		User.create({
			username: username,
			passwordhash: bcrypt.hashSync(pass, 10)
		}).then(
			function createSuccess(user){
				var token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});

				res.json({
						user: user,
						message: 'created',
						sessionToken: token
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

module.exports = router;

