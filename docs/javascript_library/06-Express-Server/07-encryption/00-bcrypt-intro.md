# ENCRYPTION
---
In this module, we'll work on storing a hashed password in the database.

<hr />

### Overview
As mentioned before, you never want a plain-text password returned in a response, and you never want a plain text password stored in the database. We want to hide the true value of the password, which we do through encryption.

<hr> 

### What is Encryption?
If you've ever used a decoder ring, you've had experience with encryption. If not, here's a short video to help explain it (short into; encryption begins at 36 seconds):
{% youtube %}https://www.youtube.com/embed/zdA__2tKoIU{% endyoutube %} 
<br>

Think back to the structure of a token, and specifically about the signature. Go ahead and play with the token again [here](https://jwt.io/#debugger). Change the signature. Notice that if the signature changes, that part of the token also changes according to the result of the algorithm. The signature is the key that is used to encode and decode the messages we want to keep hidden.

### bcryptjs
Now we need to think about running some kind of algorithm to encrypt our password. One method is to use an npm package called `bcryptjs`. Bcrypt takes a value and applies an algorithm called a `salt` to it, returning a "hash value", or `hash`. The `hash` can then be decoded using the same algorithm. Essentially, the pattern is as follows, noting that we have kept a very basic explanation of how this process works: 

1. The client sends a value to the server in its original form: the plain text password.
2. The server takes that value and applies the `salt` to the value a specified number of times.
3. Once this process is complete, the server passes the new `hash` value to the database to be stored.
<br>
In the next module, we'll add it to our database and start hashing some passwords!