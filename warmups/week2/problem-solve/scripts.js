// write a function that will return true if the number is odd or false if the number is even
var num1 = 89383094;

function isOdd(num1) {
  //if number is even false

  if (num1 % 2 === 0) { //if number is divisible by 2 it is even
    return false
    //if number is odd true
  } else { //other wise number is odd and it is true
    return true;
  }

}

// console.log(isOdd());


//return the number as a negative number. if it is already negative return the number as it is
function negative(num) {
  //if it is a positive number * by -1
  if (num > 0) {
    return num * (-1);
  } else { // if it is already negative return as is
    return num;
  }
}

// console.log(negative(9384)); //place variable inside of what you want to pass through the function


// reverse the given array and return it
var hey = [2, 56, 45, "hey", "chuck", "buck", "cluck"];
function ReverseArrayEasy(arr){
  // reverse reverse
  // aka the reverse method
  return arr.reverse();
};



var cool  = ["something", 4,6,8,9,6,4,3,3,2,2,3,4,6,7,8,6,4,3];
function ReverseArrOther(arr){
  var new1 = arr.slice().reverse();

  return new1;
}

// console.log(ReverseArrayEasy(hey));
//
// console.log(ReverseArrOther(cool))

//REVERSE WITH OUT .REVERSE METHOD
function ReverseNoMethod(arr) {
  //create an empty array for it to go into
  var end = [];
  // create a for loop to run through the index of the array
  for (var i = 0; i < arr.length; i++) {
    // end is the array i want the reverse to go into
    //  unshift move it to the back. arr[i] grabs what is inside of the array instead of the index number to put into the array
    end.unshift(arr[i]);
  }
  return end
}

// console.log(ReverseNoMethod(hey))




//return the number of vowels in a sentence
var str = "The red fox jumped over the fence";
var vowels ="aeiou";

// get the vowels out of the variable str
//the vowels are in the variable vowels
function vowelCount(str){
  //run through the str
  var counter = 0;
  // everytime you run through the first forloop it will run through the second for loop that is nested into the first for loop before moving on to the next index
  for( var i=0; i<str.length; i++){
    for (var x=0; x<vowels.length; x++){
      if (str[i] === vowels[x]){
        counter++
      }
    }
  }
  return counter;
}

console.log(vowelCount(str));
