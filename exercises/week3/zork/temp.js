var readlineSync = require('readline-sync');

var hasKey = false;

function printRoom() {
  if (hasKey === true) {
    console.log("You are in a room with a door");
  } else {
    console.log("You are in a room with a key on the ground");
  }
}
console.log("commands to look - > to look, grab -> to grab item open -> to open things");
while (true) {
  var input = readlineSync.question("What would you like to do? ");
  input = input.toLowerCase();
  console.log(input);
  if (input.includes("look")) {
    printRoom();
  } else if (input.includes("grab") && input.includes("key")) {
    console.log("You grabbed the key");
    hasKey = true;
  } else if (input.includes("grab")) {
    console.log("Dummy you got to grab something");
  } else if (input.includes("open") && input.includes("door") && hasKey) {
    console.log("You win!");
    break;
  } else if (input.includes("open") && input.includes("door") && !hasKey) {
    console.log("You don't have a key... it's locked.");
  }
}
