// build a model in sqllize
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('log', {
		description: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.INTEGER,
		def: DataTypes.STRING
	}, {
		});
};