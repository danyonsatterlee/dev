var hi = ["hi", "bye", "see ya!", "hola"];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '!', '(', ')'];


var randomNum2 = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
///twoways of doing the same thing
randomChar = function() {
  var index = randomNum2(0, alpha.length);
  return alpha[index];
}


// var str = ""
// var pass = function(){
//   for (var i = 0; i <= `${result}`.length; i++){
//     str += randomChar();
//     return str;
//   }
// }

// console.log(pass());

document.getElementById('password').addEventListener('click', function() {
  if( Number(document.getElementById("char").value)===0){
    return false;
  } else{
    var result = Number(document.getElementById("char").value);
    var str = ""
    var pass = function(){
      for (var i = 0; i <= result; i++){
        str += randomChar();

      }return str;
    }
  }
  document.getElementById('result').innerHTML = pass();

});








// var randomNum = function(min, max) {
//   return alpha[Math.floor(Math.random() * (max - min)) + min];
// }
//
// var index = randomNum(0, alpha.length);
// console.log(index);


//getting on letter or string in an array
// var randomNum2 = function(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// ///twoways of doing the same thing
// randomChar = function() {
//   var index = randomNum2(0,alpha.length);
//   return alpha[index];
// }

// console.log(randomChar());
