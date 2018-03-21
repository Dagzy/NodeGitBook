#JWT
---
In this module we'll introduce JSON Web Token(JWT), sometimes referred to as Jot.

<hr />

### What is JWT?
JWT stands for **J**SON **W**eb **T**oken. It's an identifier to be added to the body of a request. So, when you send a request, you send a token with it. Let's look at a good analogy for how JWT works:

You go to a venue to see a band. The venue is charging a $15 entry fee. You pay the fee, and then the doorman stamps your hand. You go in and the show starts.  Think of this as like signing up for an app, and your stamp is the token.

You leave the venue to get pizza and talk to your date. When you go back in, the doorman, who doesn't remember you at all, looks at your hand to see the stamp. When he sees it, he lets you in. That is what happens when you make another request in an app.

This is a real-world version of using JWT. You are the client, the venue is the server, and the stamp on your hand is the token. The doorman won't let you in without paying or a stamp. The app won't let you in without signing up or having a token with your request. And just like a stamp that will wash away in a few days, the JSON token will wear off in a certain amount of time. This time is decided by the developer. 

### Statelessness Review
The token deals with the issue of statelessness in HTTP. Think back to the idea of statelessness. Once a request is sent and a response is returned, both sides forget that the other side exists. The client forgets the server, and the server forgets the client. Once you walk into the music venue, the doorman forgets you. If you come back out, you can't get back in without the stamp. This is statelessness.


### Authenticated Request
We use a token for authenticated requests, that is when a user has to be authenticated(logged in) to do CRUD type stuff:
* a user saves a note.
* a user looks at a friends tweet
* a user direct messages a friend.
* a user loads up a bingeworthy Netflix show on their account and a record of that is stored in their parents' account because they are still freesharing. 

These requests require tokens if the user is logged in. They are authenticated requests.

### Token vs. Cookie
It's important to know about the difference between a token and a cookie, and it's drifting out side of our scope right now. We will say that we are using token-based authentication. However, the cookie and token talk is necessary reading for you. Here's a required [article.](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)

And a [Stack Overflow](https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies) post.
