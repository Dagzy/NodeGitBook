#MODELS
---
In this module we'll introduce you to a Sequelize model and use the `.define()` method to build a database model. 

<hr>

### File Set up
Let's start by adding a `models` folder and a `test.js` file:

```
javascript-library
    └── 7-Express Server
        └── Server
            └── controllers
            └── models
                └── test.js
            └── app.js
            └── db.js
```

<hr>

### Test Model
Let's create our first model, a test model:

```js
     //6                            
module.exports = function (sequelize, DataTypes) {
                      //1   //2 
    return sequelize.define('test', { //3
        //4         //5
        testdata: DataTypes.STRING
    });
};
```

### Analysis 
1. `.define()` is a sequelize method that will map model properties in the server file to a table in Postgres. You can read about it [here](http://docs.sequelizejs.com/manual/tutorial/models-definition.html).
2. In the first argument of the `define` method, we create a model called `test`, which will become a table called `tests` in Postgres(the table names are pluralized).
3. Our second argument of the define function is an object. Any key/value pairs in the following object will become columns of the table. The syntax looks a little weird here. Just know that it's an object.
4. `testdata` will be a column/key in our database.
5. `DataTypes.string` is defined as a `string` value, meaning any information to be held in that column MUST be a `string` data-type. Notice that `DataTypes` is a parameter in the function. You can read more about Sequelize DataTypes [here](http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types). Although JavaScript is a loosely typed language, Postgres wants to know what DataTypes we're adding to each of our columns. Sequelize is making us declare the data types that we'll be storing.  
6. The model is exported to allow Sequelize to create the `tests` table with the `testdata` column the next time the server connects to the database and a user makes a POST request that uses the model.

<hr />

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


