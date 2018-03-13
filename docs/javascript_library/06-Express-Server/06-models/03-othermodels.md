

### LOG MODEL
```js
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

```



### USER MODEL

```js
//user model created using sequelize
//talks to the table user

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};

```

### DEFINITION MODEL
```js
module.exports = function(sequelize, DataTypes) {
//With define, the first argument is going to represent a column in the db table
		return sequelize.define('definition', {
			description: DataTypes.STRING,
			logType: DataTypes.STRING, /* by time, reps, weight, ... */
			owner: DataTypes.INTEGER
		},{
	});
};


/*
POSTMAN TEST:
{
	"definition":{
		"description":"Running my heart out as fast I could for 70 miles.",
		"logType":"sprints"
	}
}
*/
```