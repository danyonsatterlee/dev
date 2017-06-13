var readlineSync = require("readline-sync");

// var color = readlineSync.question("What is your favorite color? ");
//
// console.log("Your favorite color is "+color.toUpperCase()+ "!");

// name, age, favorite color, etc.

var name = readlineSync.question("Hello, what is your name? ");

console.log("It's nice to meet you " + name.toUpperCase() + "." + " Let's have some ice breakers");

var age = readlineSync.question("How old are you? ");
console.log("Wow, " + age + ", you're old.");



var location = readlineSync.question("Tell me your city, state, and zip code, please ");
var userLength = location.length;

function local() {
if (location.length >= 20) {
    console.log(location.substr(userLength / 2, userLength));
  } else {
    console.log(location);
  }
}


local();

var chop = readlineSync.question("Where should I start cutting off your the location? It cannot be higher than " + userLength);




    console.log(location.substr(chop));
