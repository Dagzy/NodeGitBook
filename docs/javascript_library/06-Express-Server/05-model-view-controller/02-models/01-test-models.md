#MODELS
---
In this module, we'll introduce you to a Sequelize model and use the `.define()` method to build a database model. 

<hr>

### File Setup
Let's start by adding a `models` folder and a `test.js` file:

```
javascript-library
    └── 5-Express Server
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
     //7                         //1  
module.exports = function (sequelize, DataTypes) {
                      //2   //3 
    return sequelize.define('test', { //4
        //5         //6
        testdata: DataTypes.STRING
    });
};
```

### Analysis 
1. We run an anonymous function that has two parameters: `sequelize` and `DataTypes`. The function will return the value of what is created by `sequelize.define`.

2. We use the `sequelize` object to call the define method. `.define()` is a Sequelize method that will map model properties in the server file to a table in Postgres. You can more read about it [here](http://docs.sequelizejs.com/manual/tutorial/models-definition.html).

3. In the first argument of the `define` method, we pass in the string `test`. This will become a table called `tests` in Postgres (the table names are pluralized).

4. Our second argument of the define function is an object. Any key/value pairs in the following object will become columns of the table. The syntax looks a little weird here. Just know that it's an object that we can pass in numerous properties to create numerous table columns.

5. `testdata` is a key in our model object that will be a column in our database.

6. `DataTypes.STRING` is our value for the `testdata` property. Because we define it as a `STRING` value in the model, any information to be held in that column MUST be a `string` data-type. Remember that `DataTypes` is a parameter in the function brought in through Sequelize. You can read more about Sequelize DataTypes [here](http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types). Although JavaScript is a loosely typed language, Postgres wants to know what data types we're adding to each of our columns. Sequelize is making us declare the data types that we'll be storing.  

7. The model is exported to allow Sequelize to create the `tests` table with the `testdata` column the next time the server connects to the database and a user makes a POST request that uses the model.

<hr />
