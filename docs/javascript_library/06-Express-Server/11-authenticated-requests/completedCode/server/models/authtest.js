module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        authtestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER
    });
};