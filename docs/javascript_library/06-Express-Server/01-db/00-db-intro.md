# DATABASES
---
In this module we'll discuss the types of Databases and our choice.

<hr />

### Types
1. Relational
A relational database stores data in a table-like display, with rows and columns. Every table has something called a "primary key", which is used to automatically sort through the data. Usually this "primary key" is the ID#, but it can be changed if necessary. You can also use a "foreign key", which is information from another table that helps keep the database structured properly. In addition, relational databases use something called "sequel statements" (SQL) to manage the information within itself. SQL is a mini-language of its own, using commands to create, delete, change, or display information from the database. Relational databases are often called "SQL databases" for this reason. Some examples of this type of database are MySQL and PostgreSQL, which we will be using later. <br>

**Example**
For an example, let's look at the person object we've used in the past. We want to have two tables within our database: `person` and `employment`. In each of these tables, the `id` number will automatically be assigned each time we create something in the table and also be our primary key. This table might look like this: <br>

**Person table**
|ID|First Name|Last Name|Height|Eye Color|Glasses|
|:-|:---------|:--------|:-----|:--------|:------|
|1 |Aaron|Ofengender|70in|Brown|Yes|
|2 |James|Smith|65in|Blue|No|
|3 |John|Doe|68in|Black|Yes|

Notice that both entries contain the same information. In relational database, every item or entry must contain the same information. If some is missing, or more added, the entry will not be created. This is one way to ensure that all data entered is valid and to help maintain the structure of the database. <br>

Now let's say we want to tie the job table to the person table, so that it updates whenever the first updates. In this example, we can make the `ID` number from the person table a foreign key that, while the primary key is still the `ID` number from the job table.
**Job table**
|ID|First Name|Last Name|Occupation|Location|ID (foreign key from person table)|
|:-|:---------|:--------|:-----|:--------|:------|
|1|Aaron|Ofengender|Developer|Launch Fishers|1|
|2|John|Doe|Janitor|Carmel HS|3|

Notice that the two `id` numbers can be different. Anytime an item is modified in some way in the person table, we can set up the ability to modify the job table however is necessary (i.e. record is deleted in person table, record with same `First Name` is deleted from job table).

2. Non-Relational
A "non-relational database", or "No-SQL", is usually structured like a JSON object. Rather than having tables, everything is set up with increasingly-deep nesting of objects. Because it is set up like an object, different items can have a different number of properties, or even different properties altogether. This can be useful when dealing with a large or diverse set of data. Additionally, no SQL statements are used, which helps prevent many common types of attacks against databases. Some examples of these are Firebase from Google and MongoDB.

**Example**
Let's look at our person object in this case. We would set up the data like this:
```json
{   
    person: {
        1: {
            firstName: "Aaron",
            lastName: "Ofengender",
            height: "70in",
            eyeColor: "brown",
            glasses: true
        },
        2: {
            firstName: "James",
            lastName: "Smith",
            height: "65in",
            eyeColor: "blue",
            glasses: false
        },
        3: {
            firstName: "John",
            lastName: "Doe",
            height: "68in",
            weight: "250 lbs",
            eyeColor: "black",
            glasses: true
        }
    },
    job: {
        1: {
            firstName: "Aaron",
            lastName: "Ofengender",
            occupation: "Developer",
            location: "Launch Fishers"
        },
        2: {
            firstName: "John",
            lastName: "Doe",
            occupation: "Janitor",
            location: "Carmel HS"
        }
    }
}
```

See how different the displays are? Also notice that the foreign key is absent in the jobs object. There's no easy way to tie the two objects together, so we just leave it out. As such, the people objects are not connected at all to the job objects, even though they share the same name. Also `person.3` has the additional property of `weight`, which the others do not.

### So Which are We Using?
We will be using PostgreSQL for our project, so we'll be using a relational database. It may seem more challenging at first, but you'll quickly get the hang of it. Why are we using it? Well, the short answer is "Because we said so". You will need to learn to use both relational and non-relational databases to prepare you for the future. However, you've had a lot of experience with JSON objects, but not much with tables, and none with SQL. So we'll start with them, to give you some more time to grasp the concepts.