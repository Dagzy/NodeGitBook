//user model created using sequelize
//talks to the table user

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};