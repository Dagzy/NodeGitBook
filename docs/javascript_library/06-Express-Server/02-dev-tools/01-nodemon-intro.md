#NODEMON
---
When you make a change to code on the client side, you just have to refresh the web page to see the effect of that change. With a server, however, it gets a little more complicated. Any changes that you make won't take effect until you stop and restart the server. When you're testing routes or endpoints and making minute changes over and over, that constant stop/start routine can get kind of ridiculous. Fortunately, we have a tool that will automatically restart your server every time you save a file: Nodemon.

<hr />

### Set up 

1. In any directory, run `npm install -g nodemon`. 
2. In the server directory, where the `package.json` file is visible,  run `npm install --save-dev nodemon`.
3. Run `nodemon app.js`. This should start the server up. 

![nodemon](assets/nodemon.png)

4. The app is now running. You can stop the app with `ctrl + c`.
5. Practice running the app with Nodemon by starting it back up with the command. You can push up arrow in your terminal to get it back quickly.  
6. With the server running, with nodemon started, change the console.log statement and saving `app.js` to a new phrase. Try this:

```js
app.listen(3000, function(){
	console.log('Hey man!!!')
});
```

7. Press save. `nodemon` should fire back up. 

### FINISHED CODE
Check out the finished [code](https://github.com/ElevenfiftyAcademy/JavaScript-201-WorkoutlogApp/tree/module-4-nodemon/server). We highly advise that you do not copy and paste. We offer this to you to help guide you and help you practice.


