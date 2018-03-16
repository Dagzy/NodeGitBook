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

### Foreign Key
Relational databases will also use "foreign keys", which is information from another table that helps organize the data. Let's consider a `person` table: 

**Employee Table**

|ID|First Name|Last Name |Occupation|Location      |DepartmentID (foreign key from Department table)|
|:-|:---------|:---------|:---------|:-------------|:---------------------------------|
|1 |Aaron     |Ofengender|Developer |Launch Fishers|1                                 |
|2 |John      |Bon Jovi  |Custodian|Launch Fishers|3                                 |
|3 |Mike      |Nesmith   |Outside Sales|Launch Fishers|2                                 |
|4 |Tom       |Petty     |Inside Sales|Launch Fishers|2                                 |
|5 |Tom       |Waits     |Custodian|Downtown|3                                 |
|6 |Frank     |Zappa    |Developer|Launch Fishers|1                                 |

Notice that each Employee has a unique ID(don't get this confused with employee id). This is the id for their row in the table.

Let's consider another table:
Now let's say we want to tie the job table to the person table, so that it updates whenever the first updates. In this example, we can make the `ID` number from the person table a foreign key that, while the primary key is still the `ID` number from the job table.

**Employee Table**

|ID|First Name|Last Name |Occupation|Location      |ID (foreign key from Department table)|
|:-|:---------|:---------|:---------|:-------------|:---------------------------------|
|1 |Aaron     |Ofengender|Developer |Launch Fishers|1                                 |
|2 |John      |Bon Jovi  |Custodian|Launch Fishers|3                                 |

**Department Table**

|ID|Department|
|:-|:---------|
|1 |IT        |
|2 |Sales     |
|3 |Custodial |


Notice that the two `id` numbers can be different. Anytime an item is modified in some way in the person table, we can set up the ability to modify the job table however is necessary (i.e. record is deleted in person table, record with same `First Name` is deleted from job table).

