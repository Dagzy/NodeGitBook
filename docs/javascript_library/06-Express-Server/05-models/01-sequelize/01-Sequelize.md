# FIRST CONNECTION
---


TODO: Update dependencies in `package.json`:

```js

"dependencies": {
    "express": "^4.16.3",
    "http-server": "^0.11.1",
    "pg": "^4.5.6",
    "pg-hstore": "^2.3.2",
    "sequelize": "^3.23.3"
  },
```

TODO: Make Sequelize connection:

```js

var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('Connected to workoutlog postgres database');
	},
	function(err){
		console.log(err);
	}
);


module.exports = sequelize;
```
TODO: Make Sequelize connections....