var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', '9074dewberry1136', {
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