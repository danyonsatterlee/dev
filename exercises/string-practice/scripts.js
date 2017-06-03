// Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
var userInput = prompt ("What is your name?");
function allUppercase (str){
console.log(userInput.toUpperCase());
}
// Report back the number of characters in a given input
var userLength = userInput.length;
console.log(userLength);
// Concatenate (add) two separate strings together
var double = userInput.concat(" ", userInput);
console.log(double);
// Given a long message (more than twenty letters), return only the last half of the message
function lastHalf (str) {
  if (str.length>=20){
    var half = userInput.substr(0, (userLength/2));
    return (userInput.substr((userLength/2),(userLength*2)));
    }
    else {
      return ("sorry this isn't long enough");
    }
}
console.log(lastHalf(userInput));
// Using the same long message show the last half
var index = prompt ("Where should I start cutting off your name, it can't be higher than the number  "+ userInput.length);

console.log(userInput.substr(index));
