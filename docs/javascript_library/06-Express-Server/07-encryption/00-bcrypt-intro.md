# ENCRYPTION
---
As mentioned before, you never want a plain-text password returned in a response. This opens up security holes all over the place. We want to hide the true value of the password, which we do through encryption.
<hr> 

### What is Encryption?
If you've ever used a decoder ring, you've had experience with encryption. If not, here's a short video to help explain it (short into, encryption begins at 36 seconds):
{% youtube %}https://www.youtube.com/embed/zdA__2tKoIU{% endyoutube %} 
<br>
Ok, that might have been a little cheesy. Think back to the structure of a token, and specifically the signature. When you looked at the docs for `JWT`, you had the opportunity to mess around with a token by changing the value of the signature. I the signature changed, that part of the token also changed according to the result of the algorithm. The signature is the key that is used to encode and decode the messages we want to keep hidden.

### bcryptjs
So how can we solve this challenge? One method is to use an npm package called `bcryptjs`. Bcrypt takes a value and applies an algorithm called a `salt` to it, returning a "hash value", or `hash`. The `hash` can then be decoded using the same algorithm. Essentially, the pattern is as follows:

1. The client sends a value to the server in its original form.
2. The server takes that value and applies the `salt` to the value a specified number of times.
3. Once this process is complete, the server passes the new `hash` value to the database to be stored.
<br>
This is a very basic explanation of how this process works. In the next module, we'll add it to our database and start hashing some passwords!