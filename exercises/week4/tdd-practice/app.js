// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

var mod = function(a, b){
  if(a % 10 === b%10){
    return true;
  } else{
    return false;
  }


};


var cut = function(str){
  return str.slice(1,str.length)
}

module.exports={
  mod:mod,
  cut :cut
}
