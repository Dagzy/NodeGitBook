# INTRO
---
In this module we'll be introducing the Workout Log Server challenge. 




NOT QUITE THERE YET....But something in this direction?
### Challenge
Eventually, we'll be creating a Server for users to log details about their workouts. The final server that you create will require several models, including `user.js` and `log.js`. Use what you've learned here to create these models with the following types:

<br>

The `user.js` model requires the following columns and data-types:
```
username, STRING
passwordhash, STRING
```
<br>
The  `log.js` model requires the following columns and data-types:
```
description, STRING
result, STRING
owner, INTEGER
def, STRING
```


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
