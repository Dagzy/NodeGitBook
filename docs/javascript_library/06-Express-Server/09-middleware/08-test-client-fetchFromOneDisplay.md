# fetchFromOneDisplayData();
---
In this module we'll access the /one endpoint and do a GET request to access data for display in the DOM.  

<hr>

### Overview
Right below the `postToOneArrow` method, let's write another method. This time we'll pull in the data and think through the starter logic of showing it in the DOM. This book assumes that you have some knowledge of the DOM and DOM manipulation, but we also talk in a way that starts from square one.

### Scripts
Let's add the function now. It should go directly below the last function in `01-scripts.js`:
```js






```
### Quick Summary
This is the same function as the one above it, only we use arrow functions instead of callbacks. You can see how much more simplified and easier to read this can be, saving us from potential "Callback Hell". Our function is doing the same thing. We're reaching out to an endpoint with a POST request. We add the appropriate headers. We are asking for a json response. We handle an error, if there is one. In the end we simply print the data to the console.  

<hr>

### Test

1. Make sure that both your client and server are running.
2. Go to localhost:8080
3. Click the `POST to /one` button in Step #3.
3. You should see the following success message:
![screenshot](assets/07-postToOneArrow.PNG)

