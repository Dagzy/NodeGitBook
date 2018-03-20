//wHAT IS THE PURPOSE OF A  CLASS?
    //Make a blueprint for objects
    //Cookie Cutter - reusable template
    //DO NOT Talk about how it's just syntactic sugar...yet....

//DEMO 1
// Discuss the blueprint
class Person {
    constructor(name){
        this.personName = name;
    }
}

//Make cookies
var jenn = new Person("Jenn");
var paul = new Person("Paul");
var kenn = new Person("Kenn");

//Show the data
console.log(jenn);
console.log(jenn.personName);
console.log(paul);


// Discuss constructor
class Tweet {    //1
    constructor(tweet){
        //2            //1
        this.text = tweet;
    }
}

var paulsTweet = new Tweet("Hey everyone! This sucks!");
var quncysTweet = new Tweet("Hey everyone! This is awesome!");

//1
//Discuss the parameter & where the value goes

//2 Discuss this.tweet and how it's like pronouns. Use console.logs to show
console.log(paulsTweet.text);




//DEMO 1.5 - show how you need the parameter
// class Food {
//     constructor(){
//         this.name = name;
//     }
// }



class Player {
    constructor(name, points){
        this.name = name,
        this.points = points
    }
}


class Cat {
    constructor(name, weight, tail){
        this.name = name,
        this.weight = weight,
        this.tail = tail
    }
    
}

var tom = new Cat("Tom", 100);
console.log(tom);


