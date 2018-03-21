#TEST POST SEVEN
---
In this module we'll write code that would handle errors, should something in our server go wrong. 

<hr />

### Overview
What about the idea of a network problem as we're making our request? We make the request, the network drops, and the response never comes. What if something is wrong with our server code? We're going to need to create a function that handles such errors. 

<hr>

### The Code
Go into the `testcontroller.js` file and add the following method. Add it to the bottom of the file, but above the export statement. 

```js
/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
  var testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function createSuccess(testdata) {
        res.json({
          testdata: testdata
        });

      },
      function createError(err) { //1
        res.send(500, err.message);
      }
    );
});

module.exports = router;
```
<hr >

### Analysis
1. The addition that we've made here is an error function. If the `create()` function returns an error, it will be picked up by the `createError()` method. That method will then send back a `500` error with a message. 




