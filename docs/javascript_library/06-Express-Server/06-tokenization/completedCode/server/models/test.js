module.exports = function (sequelize, DataTypes) {
    return sequelize.define('test', {
        testdata: DataTypes.STRING
    });
};