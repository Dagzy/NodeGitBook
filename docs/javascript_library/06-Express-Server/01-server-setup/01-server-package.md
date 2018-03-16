# SERVER PACKAGES
---
In this module we'll set up a few of the server packages that will be used in this application.

<hr />

### npm init
First, let's initialize `npm` as our package manager. 

To initialize npm, go through the following steps:

1. Open the `server` folder.
2. Open the command line window.
3. Run `npm init`.
4. Hit enter through all the prompts. 
5. You should see a new `package.json` file in your `server` folder.



### PACKAGE.JSON
1. Take out the contents of the `package.json` file.
2. Replace the contents with this code:  

```json
{
 "name": "workoutlogserver",
 "version": "1.0.0",
 "description": "server for workout log app",
 "main": "app.js",
 "scripts": {
   "test": "echo /"Error: no test specified/" && exit 1",
    "start": "node ./node_modules/http-server/bin/http-server"
 },
 "author": "YOUR NAME HERE",  
 "license": "MIT",
 "dependencies": {
   "body-parser": "^1.18.2",
   "express": "^4.16.3",
   "pg": "^7.4.1",
   "pg-hstore": "^2.3.2",
   "sequelize": "^4.37.0"
 }
}
```

3. Run `npm update`. This will read all of the new dependencies above and load them all in the node_modules folder. 
4. Know that adding these new packages to `package.json` file allows us to freeze the particular versions of each dependency so that they harmonize together without breaking. For instance, let’s say that dependency "a" has an update and changes versions.  That particular change might not work with dependency "b",  which might cause the app to break. 

We'll talk about what these dependencies do as we go through this application. 
