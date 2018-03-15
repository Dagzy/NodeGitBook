# FILE STRUCTURE
---
In this module we'll set up our file structure for an Express Server. Our theme will be for a Workout Log, and we will use this as a demo app, but you can use our patterns and approach to build it for just about any application that requires routing, authentication, and persistence. 

<hr >

### File Structure
Create the following folders and files in your JavaScript library:
```
    javascript-library
        └── 0-JavaScript-PreWork
        └── 1-JavaScript-Fundamentals
        └── 2-JavaScript-DOM-Manipulation
        └── 3-JavaScript-API-Fundamentals
        └── 4-Objects
        └── 5-Arrays
        └── 6-Node Intro
        └── 7-Express Server
            └── Server
                └── .gitignore
                └── app.js
```

### .gitignore

1. Add `node_modules/` to your `.gitignore`. Anytime you work with npm packages, make sure this is in your `.gitignore`. If you forget, hundreds or thousands of extra, unnecessary files will be uploaded to your github repository. Simple add this to the `.gitignore` file:

```
node_modules/
```

2. `app.js` can be left blank for now.