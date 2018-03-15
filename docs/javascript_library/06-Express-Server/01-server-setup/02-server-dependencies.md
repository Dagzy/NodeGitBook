# SERVER PACKAGES
---
In this module we'll set up a few of the server packages that will be used in this application.

<hr />


### What is a dependency?
TODO: Explain a dependency....

### Project Dependencies
TODO: Table that summarizes in 1-2 sentences what each one of these does.
| Package       | Purpose    | 
| ------------- |:-------------:|
| bcrypt        | stuff        |
| body-parser   | stuff      |
| dotenv        | stuff      |
| express       | stuff      |
| jsonwebtoken  | stuff      |
| pg            | stuff      |
| pg-hstore     | stuff      |
| sequelize     | stuff      |

### npm init
Let's initialize `npm` as our package manager for our dependencies. To initialize npm in the application, go through the following steps:

1. Open the `server` folder.
2. Open the command line window.
3. Run `npm init`.
4. Hit enter through all the prompts. 
5. You should see a new `package.json` file in your `server` folder.

### package.json
TODO: Check on newer versions of these packages.
1. Take out the contents of the `package.json` file.
2. Replace the contents with this code:  

```json
{
  "name": "workoutlogserver",
  "version": "1.0.0",
  "description": "server for workout log app",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./node_modules/http-server/bin/http-server"
  },
  "author": "YOUR NAME HERE",
  "license": "MIT",
  "dependencies": {
    "bcryptjs": "^2.4.0",
    "body-parser": "^1.15.1",
    "dotenv": "^4.0.0",
    "express": "^4.13.4",
    "jsonwebtoken": "^7.2.1",
    "pg": "^4.5.6",
    "pg-hstore": "^2.3.2",
    "sequelize": "^3.23.3"
  }
}
```

3. Run `npm update`. This will read all of the new dependencies above and load them all in the node_modules folder. 
4. Know that adding these new packages to `package.json` file allows us to freeze the particular versions of each dependency so that they harmonize together without breaking the application. For instance, let’s say that dependency bcrypt has changed to `3.0.0` and the new version does not work well with sequelize `4.0.0`. Such a change might break our app. 

We'll talk about what these dependencies do as we go through this application. 