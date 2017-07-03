
// Given a multidimensional array of any size (but never empty) containing primitive data types, write a function that determines whether its elements belongs to the same data type (edited)
//
//
// `[[1,2,3], [4,5,6],[7,8,9]]` will return true (edited)
//

// `[[1,2,"3"],[4,5,"6"],[7,"8",9]]` will return false

let same = (multiArr) => {
  let j = typeof(multiArr[0][0]);
  for (let i=0; i<multiArr.length; i++){
    for (let x=0; x<multiArr[i].length; x++){
      if( j != typeof(multiArr[i][x])){
        return false;
      }
    }
  } return true;
};




module.exports = same;
