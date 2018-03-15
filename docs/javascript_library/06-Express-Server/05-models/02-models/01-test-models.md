#MODELS
---
In this module we'll introduce you to models. 

<hr>

### Test Model
```js
     //4                            
module.exports = function (sequelize, DataTypes) {
                        //1     
    return sequelize.define('test', {
        //2         //3
        testdata: DataTypes.STRING
    });
};
```


### Analysis
TODO: Explain this code:

 
1. `.define()` is a sequelize method that will create a table called `test`. Any key/value pairs in the following object will become columns of the table.
2. `testdata` will be a column that holds whatever data is passed into it.
3. `testdata` is defined as a `string` value, meaning any information to be held in that coulmn MUST be a `string` data-type.
4. The model is exported to allow sequelize to create the `test` table with the `testdata` column the next time the server connects to the database.

### Challenge
The final server that you create will require several models, including `user.js` and `log.js`. Use what you've learned here to create these models. <br>

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


