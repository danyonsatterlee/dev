
var removeSC = function(str){
  var result = '';
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  for( var i =0; i < str.length; i++){
    if(alpha.indexOf(str[i]) != -1){
      result += str[i];
    }
  } return result;
};

var isPal = function(str){
  var str = str.toLowerCase();
  str = removeSC(str);
console.log(str);
  var strArray = str.split('');
  var reverseArray = strArray.reverse();
  var result = strArray.join('');
  console.log(result);
  if (result == str){
    return true;
  } else{
    return false;
  }

};


module.exports = {
  isPal:isPal,
};
