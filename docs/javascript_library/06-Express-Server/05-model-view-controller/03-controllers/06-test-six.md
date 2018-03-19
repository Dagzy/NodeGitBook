#TEST POST SIX
---

Up to this point we've been printing all our results to the console. This time, we're going to actually return a response to the client. `console.log`s are great for testing purposes, but the client can't actually do anything with them.
<hr>

```js

//STEP 6 - Use this with Postman
router.post('/test/six', function (req, res) {
  var testData = req.body.testdata.item;
  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(testdata) {
        //send a response as json
        res.json({ //1 //2
          testdata: testdata //3
        });
        console.log("step six"); //4
      }
    );
});

```



<hr >

### Analysis
1. Previously, you've seen Postman get stuck on "Waiting for response". Now that we're actually sending a response, it can do something with it, rather than get stuck waiting forever.
2. Just like the API `fetch`, we use the `json()` method to turn the response into a JSON object that can be displayed by the client.
3. The same object that was added to the database is now being sent back to the client.
4. This `console.log()` still prints regardless of the result of the request, but it prints AFTER a response is received.

### Challenge
Send your request to the new route. You should receive a response in Postman that looks like ![this](../assets/06-responsedata6.png) <br>
Go back to your database and refresh it. It should now look like ![this](../assets/06-testdata6.png)