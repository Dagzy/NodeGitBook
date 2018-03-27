
### What is `fetch` Doing Here?
Before it sends off the request to the server, `fetch` performs a  `CORS`, or `pre-flight` check. `CORS` stands for Cross Origin Resource Sharing. 

Think back to our token analogy about the bar and the doorman. Before he gives you the stamp, the doorman checks your id and asks you a couple of questions to make sure that you're allowed into the bar. This is exactly how `CORS` works: before it gets to the server, the request is checked to make sure that whatever it contains is allowed by the server. In the past, you could install an npm package (`cors`) that handled this functionality, but `fetch` eliminates that dependency altogether.

### CORS Request
Study this sequence for a minute:
1. Take a look at this picture: <br> ![two requests](assets/01-fetchRequests.png) <br>
2. Notice that while we only sent a single request, there are two by the name `one`. If you click on the first request, you'll see this: <br>
![OPTIONS](assets/01-fetchOPTIONSrequest.png) <br>
3. Understand that this is how `fetch` handles CORS: It sends a request with the HTTP method `OPTIONS`. It doesn't actually send any of the headers you include, but rather, it checks to make sure those headers are allowed by the server. 
4. If everything checks out, the server responds with a `200 OK` and fetch follows with the request it's been given (`GET`, `POST`, `PUT`, etc.), seen here: <br> ![2nd request](assets/01-fetch2ndrequest.png) <br>
5. Notice that this is the request that we send through fetch that actually contains the headers we provided, including the sessionToken. 
6. If something's not quite right, an error will be returned. The request is never sent. This provides a little extra security for the server by verifying that the request from the client will be properly formatted. 
7. We also save user experience time by not sending an invalid request. 

