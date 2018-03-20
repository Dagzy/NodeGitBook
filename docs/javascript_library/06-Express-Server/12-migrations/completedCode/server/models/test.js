module.exports = function (sequelize, DataTypes) {
    return sequelize.define('test', {
        testdata: DataTypes.STRING,
        firstName: DataTypes.STRING
    });
};