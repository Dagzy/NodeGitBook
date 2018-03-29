# init AND config
---

The first step in performing a migration is to create the necessary files and folders. `sequelize init` does this process for us.
<hr>

### Running Sequelize init
1. Open a terminal window and navigate to your server folder.
2. In the terminal window, run `sequelize init`. This will create the following folders:
|Folder|Purpose|
|:-----|:------|
|config|The configuration settings for your database migrations.|
|migrations|The actual migration files. *More on this later*.|
|models|The files used to create your tables.|
|seeders|Files that can add data to your database. *More on this later*.|
<br>
*NOTE*: We already have a `models` folder, so that part is skipped.
3. Look at your project in VS Code. You should see all of the new folders.
4. Inside the `config` folder, open `config.js`. We need to make a few changes.

### config.js
We need to give Sequelize some specific information in order to access our database. Currently, the `config.js` file looks like this:

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
You can see that nothing here points to our database right now. Additionally, there are several different environments available: `development`, `test`, and `production`. For our purposes, it doesn't matter which environment is used, but there are times when it will. For now, we'll just change everything to what we need. Delete the information in `config.js` and add the following:

```json
{
  "development": {
    "username": "postgres", //1
    "password": "YOUR-POSTGRES-PASSWORD-HERE",  //2
    "database": "workoutlog", //3
    "host": "127.0.0.1",
    "port": "5432", //4
    "dialect": "postgres" //5
  },
  "test": {
    "username": "postgres",
    "password": "YOUR-POSTGRES-PASSWORD-HERE",
    "database": "workoutlog",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "YOUR-POSTGRES-PASSWORD-HERE",
    "database": "workoutlog",
    "host": "127.0.0.1",
    "port": "5432",
    "dialect": "postgres"
  }
}
```

Here's what changed:
1. The local postgres username to `postgres`
2. Your postgres password.
3. The name of your database.
4. We have to add the `port` property so that Sequelize can talk to the database on the right port.
5. Sequelize can interact with several different versions of SQL databases, each with a slightly different syntax for SQL queries. This tells Sequelize what we are currently using.
