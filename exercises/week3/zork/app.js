var readlineSync = require('readline-sync');

// trapped in a room
var userName = readlineSync.question('Hello, you have fallen down the rabbit hole. You are now in Wonderland. You need to go catch the white rabbit. You however are stuck in a room. Who are you again? ');
console.log('Awe, yes,' + userName + ' You have gotten your self in quite the pickle.');
var directions = ['left', 'right', 'forward', 'backward'];

var left = directions[0];
var right = directions[1];
var forward = directions[2];
var backward = directions[3];
///CENTER OF ROOM
var centerOfRoom = function() {
  var where = readlineSync.question('Take a look around, ' + userName + '. Where do you want to look first? ' + directions + "?");
  if (where===left) {
    console.log("You're now on the left side of the room ");
    leftofRoom();
  } else if (where===right) {
    console.log("You're now on the right side of the room ");
    rightofRoom();
  }
} else if (where===forward) {
  console.log("You moved forward");
  frontofRoom();
} else if (where===backward) {
  console.log("You moved backward ");
  doorRoom();
} else {
  console.log("Silly, that's not a direction. This is Wonderland, it's not NowhereLand.");
}
}
///LEFT OF ROOM
var leftofRoom = function() {
  var leftDirectionFromCenter = readlineSync.question('To your right is a dusty book shelf. To your left is a dusty table with some food on it. Is it tea time? Which way to look first? ');
  if (leftDirectionFromCenter === left) {
    console.log("Mmmm there is a liquid that says, 'drink me' and a cookie that says 'eat me'");
    // foodTable();
  } else if (leftDirectionFromCenter === right) {
    console.log('Want to read a book?');
    bookShelf();
  } else if (leftDirectionFromCenter === backward) {
    centerOfRoom();
  } else if (leftDirectionFromCenter === forward) {
    console.log('Are you Tweedledum or Tweedledee? You hit a wall. Try again.');
    leftofRoom();
  } else{
    console.log("This is not a command")
    leftofRoom();
  }
}
///BOOK shelf
/// FRONT OF ROOM

/// RIGHT OF ROOM

////DOOR


///FOOD TALBE



var bookShelf= function{
  console.log("need to right");
}



var foodTable = function() {
  drinkFood = ['eat', 'drink'];

  var eat = directions[0];
  var drink = directions[1];
  var eatOrDrink = readlineSync.question('Will you eat or drink? You must choose ');

}


while(true{
  var doorLocked =
})
centerOfRoom();
