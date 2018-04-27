# QUERY METHODS
---

When we previously used the Sequelize `findall()` method, we just took it for granted that it would work. But what exactly is going on underneath? Let's take a closer look.

### findall()

Here is one of our methods from the `authtestcontroller` file:
```js
AuthTestModel
		.findAll({
			where: { owner: userid }
		})
```
We know that it is going to attempt to find a user in the `AuthTest` table where the values for the `id` and `owner` columns match the supplied values. When called, this method runs the following SQL statement: `SELECT * FROM AuthTest WHERE owner = userid;`. In other words: `SELECT` everything `FROM` the AuthTest table `WHERE` the owner column matches our value of `userid`. You can see from our code which parts of the code correspond to each part of the statement.

---

Of course, this isn't the only method we used which runs a SQL statement. While `findAll` and `findOne` run `SELECT` statements, we also use the `create` method to add data to the table, which runs a `CREATE` statement. The following table shows some of the standard Sequelize query methods and the different SQL statements that they represent:

|Sequelize Method|SQL Statement|
|:---------------|:------------|
|`findAll()`     |`SELECT...`  |
|`findOne()`     |`SELECT... LIMIT 1`|
|`create()`      |`INSERT...`  |
|`update()`      |`UPDATE...`  |
|`destroy()`     |`DELETE`     |
|`createTable()` |`CREATE TABLE...`|
|`dropTable()`   |`DROP TABLE...`|

<br>

There are many different ways to adjust or enhance your queries, primarily using `Operators`. To learn more about this and other topics relating to queries, check the Sequelize docs [here](http://docs.sequelizejs.com/manual/tutorial/querying.html).