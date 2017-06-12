var original = "hi";
var alphabet = "abcdefghijklmnopqrstubwxyz";
var crypt = 0;

var newString = "";

// this is the function and has a peramater of a string to put in, the alphabet, and a number to be the key, or move up in the alphabet by from the original letter in the string.
function ceasar(str, alphabet, num) {
  //
  for (var i = 0; i < str.length; i++) {
    for (var x = 0; x < alphabet.length; x++) {
      if (str[i] === alphabet[x]) {

        if (x + num >= 26) {
          var y = (x + num) % 26;
          var add2 = alphabet[y];
          newString += add2;
        } else {
        if (str[i]=== alphabet[x])
          var add = alphabet[x + num];
          newString += add;
        }
      }
    }
  }
  return newString;
};

console.log(ceasar(original, alphabet, 2));




//if x+shiftnumber=26 it should be 0 remainder of 26/26 is 0
// if x+shiftnumber=27 it should be index 1 which is b 1 remainder of 26/27 is 1
//if x+shiftnumber = 28 it shoudl be index 2 which is c 2remainder of 26/28 is 2
