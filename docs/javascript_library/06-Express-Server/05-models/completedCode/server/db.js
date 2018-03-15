var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'YOUR-Postgres-PASSWORD-HERE', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('Connected to workoutlog postgres database');
	},
	function(err){
		console.log(err);
	}
);


module.exports = sequelize;