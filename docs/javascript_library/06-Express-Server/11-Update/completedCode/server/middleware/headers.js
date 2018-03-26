module.exports = function(req, res, next){
	res.header('access-control-allow-origin', '*');
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	//res.header('access-control-allow-credentials', true);
	//https://stackoverflow.com/questions/47878735/how-to-send-jwt-token-with-fetch-and-cors-to-an-express-server-in-authorization
	next();
};