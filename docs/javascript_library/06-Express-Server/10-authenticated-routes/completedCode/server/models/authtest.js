module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtest', {
        authtestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};