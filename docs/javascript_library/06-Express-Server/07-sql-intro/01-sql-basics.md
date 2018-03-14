# SQL BASICS
---

In this module we're going to give you enough to get by with SQL basics. 

<hr>

### Basic Query

TODO: Monica is making basics for this.....She has them in another book.....We should grab them from her. We need to grab create table, query a table, insert an item into a table, etc. Just basic stuff.

NOTE: We don't want to go overboard here because we want them just getting a feel for it. More on SQL later....

TODO: Just show how to see some data in Postgres.

Do a query for users, do a create, etc.

Here is a query for entering test data:
```sql

INSERT INTO tests(testdata, "createdAt", "updatedAt") 
VALUES('stuff 2','2017-05-01 10:17:00','2017-05-01 10:17:00');


```


TODO: Monica is working on this one.....

Need a query for a table called 'tests' that will have one property `testdata`. It's a string.
Need an insert into the table. Already got it:
```sql
INSERT INTO tests(testdata, "createdAt", "updatedAt") 
VALUES('stuff 2','2017-05-01 10:17:00','2017-05-01 10:17:00');
```

Need a query to update a row.
Need a query to delete a row.
Need a query to add a property to the table.
Need a query to drop the tests table.
Need a script that will drop the table, then rebuild the table with 3 new properties. Something like that.