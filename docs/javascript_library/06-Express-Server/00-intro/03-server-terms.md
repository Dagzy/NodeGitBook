# COMMON TERMS
---
In this module, we'll introduce you to some common terms found in Server/API.

<hr >

### Server Terms Cheat Sheet
The following is a cheat sheet for your usage as you go through this portion of the program. There is not a need to memorize these. Our hope is that you can understand all of them by the time we are done: 

| Concept       | Definition    | 
| ------------- |:-------------:|
| server        | a program (or hardware) that accepts and responds to requests from a client   |
| client        | a program     (or hardware) that accesses a service made available by a server   |
| middleware    | software that enables communication of data between domains -> For example, www.myapp.com can talk to www.apiformyapp.com      |
| router        | determines how to handle an incoming HTTP request |
| route         | the actual path that handles a request: `localhost:3000/helloworld` |
| controller    | receives the request from the router and decides what to do with it |
| endpoint      | a function like POST or DELETE available through shared base routes: `/user/post-data` or `/user/delete-data` |
| database      | a structured set of data held that is accessible in various ways |
| database table | used in relational databases to store data; a flat file with vertical columns and horizontal rows |
| data model    | server code that mirrors the structure of a database table     |
| encryption    | the conversion of data into encoded data to hide its true value: `"mypassword"` -> `"2XKLJlkjasdlfl83"`      |
| statelessness    | the idea that a client and server forget each other after each request/response lifecycle |
| session       | a timed meeting between two different devices or applications   |
| token         | allows a server to identify a client more easily between requests |
| authentication| the process of comparing credentials provided by a client with those found in a database      |
| SQL           | a language used to query a relational database      |
| migration     | the process of updating a database table if a data model changes      |
