var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function (req, res, next) {
    var sessionToken = req.headers.authorization;
    console.log("Session Token");
    if (!req.body.user && sessionToken) {
        jwt.verify(sessionToken, "i_am_secret", function (err, decoded) {
            if (decoded) {
                User.findOne({ where: { id: decoded.id } }).then(
                    function (user) {
                        req.user = user;
                        next();
                    },
                    function () {
                        res.status(401).send({ error: 'Not authorized' });
                    }
                );
            } else {
                res.status(401).send({ error: 'Not authorized' });
            }
        });
    } else {
        next();
    }
}
