var userInput = prompt("Do you want to go right or left?");
// window.onload =userInput;

function myTravel(choice1, choice2) {

  if (userInput === "left") {
    choice1();
  } else if (userInput === "right") {
    choice2();
  } else {
    console.log("that isn't a choice");
  }


};

myTravel(function() {
    console.log("to the left to the left");
  },
  function() {
    console.log("to the right to the right");
  }

);
