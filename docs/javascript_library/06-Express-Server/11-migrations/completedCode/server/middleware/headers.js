module.exports = function(req, res, next){
	res.header('access-control-allow-origin', '*');
	next();
};
