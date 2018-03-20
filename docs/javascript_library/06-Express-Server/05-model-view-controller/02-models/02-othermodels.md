# PROJECT MODELS
---
In this module we'll add two models that will be used in later in our project. 

<hr>

### USER MODEL

```js
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};

```

### LOG MODEL
```js
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('log', {
		description: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.INTEGER,
		def: DataTypes.STRING
	});
};

```

