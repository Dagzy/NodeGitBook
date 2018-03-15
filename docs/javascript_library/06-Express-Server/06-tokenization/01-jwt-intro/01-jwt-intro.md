#JWT
---

### What is JWT?
JWT stands for **J**SON **W**eb **T**oken.
TODO: JWT explain with diagram.... <br>

### Another Way to Think About JWT
Picture yourself going out to a bar to see a band. In order to get in and see this band, the bar is charging a $5 entry fee. You want to get in, but you don't want to pay. The doorman doesn't agree, and won't let you in. You try sneaking past, putting on a disguise, going around to backdoor, but you get caught every time. Finally you give in and pay the cover. The doorman smiles, stamps your hand, and waves you on through. You go in and the show starts, but you get a phone call and have to step outside. When you finish, the doorman looks at your hand and lets you in. It's a great show and the bar gets its money so everyone's happy! <br>

This is a real-world version of using JWT. You are the client, the doorman is the server, the bar is the database, and the stamp is your token. If you try to get by the doorman without paying, you get shut out, just like trying to access something in the database that requires authentication. Paying the cover is like sending a request to the server for authentication, while getting stamp is receiving a successful response. The stamp lets you in the bar in the same way the token lets you into the protected section of a website or database.

### Why is it Useful?
Think back to the idea of statelessness. Once a request is sent and a response is returned, both sides forget that either ever happened. It's like they never existed. <br>

Imagine the scenario with the bar again, but this time there's no stamp. You pay the doorman the cover, he checks your id, and then writes your name down on a list. When you get that phone call and go back outside, however, you don't have anything to show the doorman that you've already paid. He has to check your name against his list before he lets you in. He has a large list, though, so it takes some time. And this is after you've waited behind 15 other people doing the same thing. Then you get another call and have to go back outside and do it again! The stamp sounds pretty good about now, huh?<br>

Statelessness is great for transferring information, but the fact that nothing is retained really hampers security and loading times. The token allows for some bits of information to be packaged together, freeing up space inside the request for other information. It also saves time assembling each request, as there's less that actually has to be crammed in. <br>

While this might seem trivial and that a miniscule amount of time and space are saved, think back to the doorman with the list. Having to check that list every time for every person starts to add up over time. Eventually, you'll have people that miss the entire show because they spend the whole night outside in line, waiting to get in. Any little bit of savings is multiplied exponentially, making that savings worth it.

### Token vs. Cookie
Most people have heard of cookies before. While they both store information, cookies and tokens have some fundamental differences. While the token is *stateless*, a cookie is *stateful*, meaning it keeps records of previous transactions. A cookie is information from a web page that is actually stored on a machine, while the token is stored in the browser. A cookie is checked once when opening a connection and destroyed when closing the connection; a token is validated with every request. Cookies also have a much longer expiration date and contain far more information than tokens. Finally, a the information in a cookie is created solely by the developer, whereas a token's information is created by the program according to some sort of algorithm. Some comparisons and evaluations of the differences between cookies and tokens can be found in the links below.

### Further Reading
[https://auth0.com/blog/cookies-vs-tokens-definitive-guide/](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/) <br>
[https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies](https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies)<br>
