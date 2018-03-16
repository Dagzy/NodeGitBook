# FIRST CONNECTION
---
In this module we will use Sequelize to connect our Server to pgadmin.

<hr>



### Sequelize connection
To use Sequelize, we'll have to establish a connection:

```js
//1
var Sequelize = require('sequelize');

      //2               //3       //4         //5            //6          
var sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
	host: 'localhost', //7
	dialect: 'postgres'  ///8
});
    //9      //10         //11         
sequelize.authenticate().then(
	function() { //12
		console.log('Connected to workoutlog postgres database');
	},
	function(err){ //13
		console.log(err);
	}
);
                 //14
module.exports = sequelize;
```

### Analysis
TODO: Finish
|Concept|Analysis|
|:-|:---------|
|1 |Import the Sequelize package.|
|2 |Create an instance of Sequelize for use in the module with the `sequelize` variable.|
|3 |Create a new Sequelize object.|
|4 |Identify the db table to connect to.|
|5 ||
|6 |The password for the local db.|
|7 ||
|8 |Identify the QL dialect being used. |
|9 ||
|10 ||
|11 ||
|12 ||
|13 ||
|14 ||



