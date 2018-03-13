#MODELS
---
In this module we'll introduce you to models. 

<hr>

### Test Model
```js
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('test', {
        testdata: DataTypes.STRING
    });
};
```



