# MODELS
---
In this module we discuss why we need models in an application.

<hr>

### Rationale
Essentially, we will use models to define the data that we want to store. Essentially, the model in our server will mirror the data table in our database. Consider the following diagram:

![screenshot](assets/01-sequelizepostgres.png)

Again, you should see that our data model in the server will be very similar to the columns in the data table in Postgres. Note that Sequelize handles a few timestamps for us.  

Let's start learning how to configure this by building our own test model. 