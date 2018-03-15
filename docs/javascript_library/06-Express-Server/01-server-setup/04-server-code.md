#SERVER SET UP
---
In this module we'll simply get a starter up going with Express. 

<hr>

### File Structure
TODO

### app.js 
TODO: Explain the code
```js
var express = require('express'); //1
var app = express(); //2

//3
app.listen(3000, function(){
	console.log('App is listening on 3000.')
});
```

### Analysis
TODO: Explanations
1. quick explain of express package.
2. TODO: Link to the express() docs.
3. Explain app.listen

### Testing
When we go to http://localhost:3000/, we will see the application running:

![screenshot](assets/02-server-running-dom)

TODO: Explain the screenshot above....
TODO: Add a screenshot of the console....


### Completed Code
Here is the [completed code](https://github.com/ElevenfiftyAcademy/JavaScript-201-WorkoutlogApp/tree/module-2-serversetup/server) for this section.