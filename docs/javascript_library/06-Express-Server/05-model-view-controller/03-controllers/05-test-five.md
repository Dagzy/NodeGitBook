#TEST POST FIVE
---

The way we displayed the success message before is kind of pointless. We don't need a callback containing the `console.log()`; At the moment, `console.log()` will do the same thing without the callback. However, let's pass something into the callback to provide a more detailed response to the user.
<hr>

```js
//STEP 5 - Use this with Postman
router.post('/test/five', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) { //1
        console.log(testdata); //2
        console.log("Step five achieved!");
      }
    );
});

```


<hr >

### Analysis

1. We pass the data into the callback method to be used later
2. This prints the entire object that's being entered into the database.

### Challenge
Send your request to the new route above. This time, you should see a lot more information printed to the console about the `testdata` object. It should look something like ![this](../assets/05-test5data.png) <br> Most of what prints will be new to you. It's all information that the database keeps on our tiny bit of data. Also check your database to make sure that the data was inserted properly.