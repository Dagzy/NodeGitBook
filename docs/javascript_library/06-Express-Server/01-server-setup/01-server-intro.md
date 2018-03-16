# Common Terms
---
In this module we'll introduce you to some common terms found in Server/API.

<hr >

### Orientation
![screenshot](../../../assets/01-clientserverdiagram.png)

### Parts of the Server
What is a server?  In the past, you have used `Fetch()` to GET data from an API.  Where the client is that site showing that data that you built (like your Star Wars app), the server was where that API was stored that you accessed.  In a sense, it is the door to a database storing that raw data that we can tap into to access or (like in this chapter) add to the persisting data.<br>

| Concept       | Definition    | 
| ------------- |:-------------:|
| route         | Set the path to a certain piece of the content that is appended to your url |
| endpoint      | The tip of the server iceberg that you can see when accessing the server |
| database      | Storage of raw data, usually in a table format, accessible in many ways |
| data model    | A visual representation of how the data interacts with both itself and client |
| token         | The temporary symbol gaining access to the database |
| encryption    | A jumble of alphanumeric and special characters to disguise valuable data like passwords |
| session       | The temporary period where your token is valid |
| dependency    | Requirements to adequately connect with server |
| authentication| A set of credentials that uses tokens and encryption to gain access |
| middleware    | A bridge between client and server |
| SQL           | Structured Query Language; a standard db language |
| migration     | Updating the structure of the db to mimick the data model |

TODO: Make a diagram to show these things?