// Loops help you reduce your lines of code when performing a task multiple times. Here you will learn how to use some of the different looping structures. Beware of infinite loops!
//
// Write a program that accepts a string as input. Write a loop to print out each letter of that string individually.
var userInput = prompt("Write a sentence");

function chop() {
  for (var i = 0; i < userInput.length; i++) {
    console.log(userInput[i]);
  }

}
chop();




// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

var userInput2 = "i am a sentence";
var n = "n"
function picker(){
  for(var i=0; i<userInput2.length;i++){
    if (userInput2[i] === n) {
      return "found";

    }
  } return "not found";
}
console.log(picker());

// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
var userInput3 = [12, 13, 45, 34, 87, 8495, 42, 947, 9];

function fourtyTwo() {
  for (var i = 0; i < userInput3.length; i++) {
    if (userInput3[i] === 42) {
      return "found";
    }
  } return "not found";
}
console.log(fourtyTwo());
// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten.

var smallest = [5,3,8,9,10,1,7,5,6,8,2];

function tiny(){
  return Math.min(...smallest);
}
console.log(tiny());
