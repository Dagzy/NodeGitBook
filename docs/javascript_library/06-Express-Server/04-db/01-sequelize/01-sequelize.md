# FIRST CONNECTION
---
In this module we will use Sequelize to connect our Server to pgadmin.

<hr>


### Sequelize connection
To use Sequelize, we'll have to establish a connection. This is the standard approach from the [docs](http://docs.sequelizejs.com/manual/installation/getting-started.html#test-the-connection), and it is often copy and pasted into projects for set up. Simply put, it's allowing us to connect from our project to the Postgres database. Here we do a simple breakdown of the code:

```js
//1
const Sequelize = require('sequelize');

      //2               //3       //4         //5            //6          
const sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
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
Let's do some analysis
|Concept|Analysis|
|:-|:---------|
|1 |Import the Sequelize package.|
|2 |Create an instance of Sequelize for use in the module with the `sequelize` variable.|
|3 |User the constructor to create a new Sequelize object.|
|4 |Identify the db table to connect to.|
|5 |The username for the db.|
|6 |The password for the local db.|
|7 |The host points to the localhost for sequelize. This is 5432. |
|8 |Identify the QL dialect being used. Could be MSSQL, SQLLite, too |
|9 |Use the sequelize variable to access methods.|
|10 |Call the authenticate method. |
|11 |Authenticate returns a promise. Use `.then()`.|
|12 |Fire a function that shows if we're connected.|
|13 |Fire an error if there are any.|
|14 |Export the module.|



