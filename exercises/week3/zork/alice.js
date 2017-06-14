var readlineSync = require('readline-sync');

var drink = false;

function printRoom() {
  if (drink === true) {
    console.log("You're the right size for the door");
  } else {
    console.log("You are far too big " +userName);
  }
}

var userName = readlineSync.question("Hello, you have fallen down the rabbit hole. You are now in Wonderland. You need to go catch the white rabbit. You however are stuck in a room. Who are you again? ");
console.log("Awe, yes," + userName + " You have gotten your self in quite the pickle. You're too big for this door!");

console.log("commands to eat - > to eat, drink-> drink ->  open -> to open things");
while (true) {

  var input = readlineSync.question("What would you like to do? This is Wonderland after all, anything is possible. ");
  input = input.toLowerCase();
  console.log(input);
  if (input.includes("eat")) {
    console.log("oh no! You are getting too big for the room!");
    printRoom();
  } else if (input.includes("drink")) {
    console.log("oh my! You are getting very small!");
    drink = true;

  } else if (input.includes("door") && input.includes("open") && (drink===true)) {
    console.log("You made it! Let us go play some crochet!");
    break;
  } else if (input.includes("door") && input.includes("open") && (drink===false)) {
    printRoom();
  }
}
