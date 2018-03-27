var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
	if (req.method == 'OPTIONS') { //10
		next()
	} else {
		var sessionToken = req.headers.authorization; //1
		console.log(sessionToken) //2
		if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); //3
		else { //4
			jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //5
				if(decoded){
					User.findOne({where: { id: decoded.id}}).then(user => { //6
						req.user = user; //7
						next();
					},
					function(){ //8
						res.status(401).send({error: 'Not authorized'});
					});
				} else { //9
					res.status(402).send({error: 'Not authorized'});
				}
			});
		}
	}
}