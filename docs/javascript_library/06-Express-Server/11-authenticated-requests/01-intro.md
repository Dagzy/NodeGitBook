# FETCH DISCUSSION
In this module we'll go deeper into discussing the `fetch()` method.
---

<hr />

### The Anatmoy of the Request
Fetch is handling a multistep process in this request. The process is complex and requires time to understand. Let's look at it:

1. When the method fires off, `fetch()` notifies the browser to send a Pre-Flight from `localhost:8080`.
2. The browser fires off an OPTIONS request. See more below about OPTIONS.
3. The OPTIONS HTTP protocol checks in with the Headers on the server for the request type. So, if we fire off a GET request for a certain route, the server does an initial scan and checks to be sure that the type of request can happen.
4. If the request type is enabled in the headers, the OPTIONS response is sent back with the listing of that request type.
![screenshot]()
5. If the PreFlight OPTIONS request determines that the request is allowed, the fetch method fires off.
6. The fetch() script fires off the second request approved by the PreFlight check. 
7. The second request makes it to the server endpoint and processes the request.
8. The server sends back a response. 

This is big stuff, so let's see a diagram of this:
![screenshot](01-request-diagram-withpreflight.png)

### The important points:
1. Before it sends off the GET or POST request to the server, the browser performs a  `CORS`, or `pre-flight` check. `CORS` stands for Cross Origin Resource Sharing. This phase is going to call out and look for the headers in the server.

2. If everything checks out with our PreFlight request, the server responds with a `200 OK` and fetch follows with the request it's been given (`GET`, `POST`, `PUT`, etc.), seen here: <br> ![2nd request](assets/01-fetch2ndrequest.png) <br>

### The OPTIONS verb
Just an aside on the `OPTIONS` verb:

`OPTIONS` is an HTTP verb, like GET, POST, PUT, DELETE. Check on the Postman list, you'll see it there. <br />

The `OPTIONS` verb allows the client to determine the options associated with our server, without having to dig in and do data retrieval or deal with resources in the server. It's an intermediary between domains that says, "Hey, will we be able to do this here if we come in?"
