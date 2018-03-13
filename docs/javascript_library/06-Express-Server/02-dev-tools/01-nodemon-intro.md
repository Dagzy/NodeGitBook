#NODEMON
---
When you make a change to code on the client side, you just have to refresh the web page to see the effect of that change. With a server, however, it gets a little more complicated. Any changes that you make won't take effect until you stop and restart the server. When you're testing routes or endpoints and making minute changes over and over, that constant stop/start routine can get kind of ridiculous. Fortunately, we have a tool that will automatically restart your server every time you save a file: Nodemon.


<hr />


### FINISHED CODE
Check out the finished code. We highly advise that you do not copy and paste. We offer this to you to help guide you and help you practice.

https://github.com/ElevenfiftyAcademy/JavaScript-201-WorkoutlogApp/tree/module-4-nodemon/server


STEPS
1. Please do a little reading about Nodemon. It is perfectly fine to read this after you go through the steps, just be sure you take a look and understand what node does. 
2. In the server directory, run npm install -g nodemon
3. Run nodemon app.js. This should start the server up. 

![nodemon](assets/nodemon.png)

4. Stop the app with Ctrl+C.
5. Practice running the app with Nodemon. 
6. You might not see the beauty of Nodemon now, but you will when you make a lot of changes to your server. Try changing the console.log statement and saving in `app.js`:

```js

app.listen(3000, function(){
	console.log('Hey man!!!')
});
```
