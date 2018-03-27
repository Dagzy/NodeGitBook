# TESTING AUTHENTICATION
---

Time to test our routes. Open up two terminal windows. In one, start your server with `nodemon`. In the other, start your client with `http-server`. 

In the signup area, create a new user with a username and password, then click submit. The session token should print to the console. Then click the "print token" button beneath it to print the token to the console again. This verifies that you have a token. It should look like this:
![this](assets/04-testUser.png) <br>
![console](assets/04-testUserConsole.png) <br>

Before we use the "Test Authenticated Routes", we need to put something in the database for our new user to display later.
<hr>

### Posting Data to `authtest`
Open up Postman and set your route to `localhost:3000/authtest/create`, then copy your session token into the authentication header. We talked before about using the header `Accept` to distinguish between the two requests that are sent by `fetch`. Because we're using Postman, there is no `OPTIONS` request, but we still need to send the `Accept` header so that the `validate-session` file knows how to handle this request. Add the `Accept` header and give it a value of `application/json`, the same as the `Content-Type` header. You should see the following:
![headers](assets/postmanHeaders.png) <br>

Our `json` body object should look like this:
```json
{
    "authtestdata": {
        "item": "testing the authenticated route"
    }
}
```
Go ahead and post your data. You should get a response like this:
![create data](assets/postmanPost.png) <br>

### Accessing the Protected Route
Go back to your browser and click the button on the bottom for "Make Authenticated Request". This should retrieve the object that you just put into the `authtestdata` table and print it to the console as an array. It should look something like this:
![console](assets/authtestdataConsole.png) <br>