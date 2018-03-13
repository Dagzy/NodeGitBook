#NODEMON
---
In this module we'll set up Nodemon, a tool for automating changes to the server. TODO: Say it better.

<hr />


### FINISHED CODE
Check out the finished code. We highly advise that you do not copy and paste. We offer this to you to help guide you and help you practice.

https://github.com/ElevenfiftyAcademy/JavaScript-201-WorkoutlogApp/tree/module-4-nodemon/server


STEPS
1. Please do a little reading about Nodemon. It is perfectly fine to read this after you go through the steps, just be sure you take a look and understand what node does. 
2. In the server directory, run npm install -g nodemon
3. Run nodemon app.js. This should start the server up. 

TODO: Example screenshot of Terminal:

4. Stop the app with Ctrl+C.
5. Practice running the app with Nodemon. 
6. You might not see the beauty of Nodemon now, but you will when you make a lot of changes to your server. Try changing the conosole.log statement and saving in `app.js`:

```js

app.listen(3000, function(){
	console.log('Hey man!!!')
});
```
