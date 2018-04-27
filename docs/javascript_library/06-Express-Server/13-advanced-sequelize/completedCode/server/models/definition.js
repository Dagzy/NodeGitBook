module.exports = function(sequelize, DataTypes) {
    //With define, the first argument is going to represent a column in the db table
            return sequelize.define('definition', {
                description: DataTypes.STRING,
                logType: DataTypes.STRING, /* by time, reps, weight, ... */
                owner: DataTypes.INTEGER
            },{
        });
    };
    
    
    /*
    POSTMAN TEST:
    {
        "definition":{
            "description":"Running my heart out as fast I could for 70 miles.",
            "logType":"sprints"
        }
    }
    */