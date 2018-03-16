# MIDDLEWARE Setup
In this module we'll use Express to begin allowing CORS for client and server request/response cycle.

<hr />

### Headers

1. Go into the middleware folder.
2. Then, go into the `headers.js` file.
3. Add the following code. Feel free to omit the comment numbers:

```js
 //1                        //2
module.exports = function(req, res, next){
    //3                    //4
	res.header('access-control-allow-origin', '*');
    //5
	next();
};
```

### Analysis
1. module.exports allows us to export this headers.js module. 
2. req, res, next explanation
3. res.header explanation
4. explanation, plus explanation of the wild card
5. next explained.





### next() 
Do we need to cover next() in more detail?
Begin using the .next() promise.

