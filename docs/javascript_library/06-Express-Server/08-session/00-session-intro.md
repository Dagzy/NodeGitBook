# SESSION
---

Picture the following situation: You just signed up for a new email account. You've already given the new account to everyone you know and have deleted the old one. When you try to login, however, you discover that there's no ability to access the account after it's created, so you can't access your new email! THE HORROR!!! <br>
That might be a bit over-dramatic, but the point stands: It's not worth signing up for something if you can't get back into it later. As mentioned previously, the only way to get into the database right now is to sign up a new user. Let's fix that.

### What is a Session?
When we talk about a session, we're talking about the length of time in which you are doing something. Whether you're playing a video game, going for a job, or sitting down to work, each one of these activities can be called a session. For our purposes, a session is the length of time that you are allowed to access the database. In other words, the length of time your token is valid. Remember that our token expires after 24 hours, so that is the maximum length of time that we can have a session last.

### Establishing a Session
In order to establish a session, a user must receive a token. When a new user is added, we create that initial session by automatically giving them a token. To let them back into the database later, we have to verify that they are already in the `user` table and that their credentials match what we have stored. Only after this occurs will a token be issued, allowing them access. This token will either be revoked upon logging out or it will expire after 24 hours, at which point a new session must be established.