//
// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.
//


var code= "cozexxcope";
var yaya = "codezzjdjgkcopecode"
var counter=0;
function countCode(str) {
  for(var i=0; i<str.length; i++){
    if(str.substring(i, i+2)=="co" && str.substring(i+4, i=="e")){
    counter++

    }
  } return counter;
}




console.log(countCode(yaya));
