# SEEDS
---

So far, we've only entered data into our database via Postman, but there are many other ways to do so. You can obviously create a webpage to bring data from the client side, but you can also add data via the Sequelize CLI by using `seeds`. This can be an easy way to build in an admin-level user into your database to bypass security settings while in testing or to create a backdoor for you to have access to later for updates.

### What is a Seed?
Simply put, a seed is a file containing information that you want to enter into a database. The structure of a seed file is the same as a migration file in that it exports both an `up` and a `down` function. It differs in its functionality, however, in that a seed adds a row of data instead of a column.  Seeds can also be run multiple times, whereas a migration can only be run once.

### Creating a Seed
We create a seed just like a model or a migration using the command `seed:generate`. Like the migration, the only attribute needed is `--name`. Let's create a seed called `testSeed`:
```
sequelize seed:generate --name testSeed
```
You should see the following in your console: <br> ![seedCreate](assets/seedCreate.png) <br> Notice that it attempts to create a `seeders` file, which is skipped because it already exists. It then creates a file in the seeders folder with the long string of numbers. This file is the same as the skeleton migration file we previously created. This time, we'll use the `bulkInsert()` and `bulkDelete()` methods. Add the following code in the designated function:

```js
//This goes in the up function
return queryInterface.bulkInsert('tests', [{
        testdata: 'testing. testing. testing.',
        firstName: 'DeepBlue'
      }], {});

//This goes in the down function
return queryInterface.bulkDelete('tests', null, {});
```

### Seeding the Database
You can run a single seed by using `db:seed [filename]`, or run all seeds at once with `db:seed:all`. Since we only have one seed right now, it doesn't really matter which we use, but go ahead and use the second for now. When you're ready, run `sequelize db:seed:all` to push the information in the `up` function into the database. You should see something like this: <br> ![seedFail](assets/seedFail.png) <br>

Can you guess why it didn't work? The `createdAt` and `updatedAt` columns must have a non-null value inside of them, and these time-stamps are usually automatically generated. However, our seed doesn't have those values at all! We can add them using the `Date` object:

```js
return queryInterface.bulkInsert('tests', [{
        testdata: 'knight to b3. checkmate.',
        firstName: 'DeepBlue',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
```

Run `db:seed:all` again. You should see something similar to this:
![seedConsole](assets/seedConsole.png) <br>
![seedDatabase](assets/seedDatabase.png) <br>

Our last step will be to revert the seed that we just ran, which we'll cover in the next module.