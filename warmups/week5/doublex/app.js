

// var doubleX=function(str) {
//(word[i] === word[i++] && word[i]==="x"),
// }


let doubleX = (word) => {
  for(let i=0; i < word.length; i++){
    if (word[i]==="x" && word[i+ 1] != "x"){
      return false;
    } else if(word[i]==="x" && word[i+1]==="x" ){
      return true;
    }

  }
  return false;
};
//or
///let doubleX = (str) => {
//     let posit = str.indexOf(“x”);
//     let check = posit + 1
//     if(str[check] === “x” ) {
//
//        return true;
//     } else {
//         return false;
//     }
// };
//
// module.exports = doubleX;

//or
// let doubleX = (str) => str[str.indexOf("x") + 1] == "x";





  module.exports = doubleX;
