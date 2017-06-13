// Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:

// antiCaps('Hello') // hELLO
// antiCaps('racEcar') // RACeCAR
// antiCaps('bAnAnA') // BaNaNa


// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }
//
// console.log(isCaps("H"));


//splice string and join them back together
function antiCaps(str){

  for(var i = 0; i<str.length; i++){

    if (str[i] === str[i].toUpperCase()){
      var lower = str[i].toLowerCase();
      console.log(lower);
    } else {
      var upper= str[i].toUpperCase();
      console.log(upper);
    }
  }
}
antiCaps("Hello");
