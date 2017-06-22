//
//
// function canMovie(age){
//   if(age< 0){
//     throw "No such age exists"
//   }
//   else if(age<13){
//     console.log("You can see a PG movie");
//   } else if (age >= 13 && age <18){
//     console.log("You can see a PG-13 movie")
//     } else {
//       console.log("you can see an R movie")
//     }
//   }
//
//
//
//
//
// try{
//   canMovie(-1);
// }catch(err){
//   console.log(err);
// }
//
// var myName = "John Doe";
// console.log(name);
//
// try{
//  consle.log(name);
// }catch(err){
//   console.log(err);
// }





//
// var assert = function(actual, expected){
//   if(expected !=actual){
//     throw "BOOoooooo"
//     } else{
//       console.log("Test passed");
//     }
//
// };
//
// var addNum= function(a, b){
//   return a +b;
// };
//
// assert(addNum(5,2),9);


var assert = function(actual, expected){
  if(expected !=actual){
    throw{ actual:actual, expected: expected}
    } else{
      console.log("win", { actual: actual, expected: expected});
    }

};
var describe = function(message, testFunc) {
  console.log(message);
  try {
    testFunc();
  } catch (err) {
    console.log("error boooo hisss", err)
  }

};

describe("Test group", function() {
  assert(true, true);
  assert("Some string", "Some string");
  assert(1, 1);
});
var add = function(a, b) {
  return a + b;
};

var sub = function(a, b) {
  return a - b;
};

var multi =function(a,b){
  return a*b;
}

var div = function(a,b){
  return a/b
}

describe("test calc", function(){
  assert(add(2,3), 5);
  assert(sub(2,3), -1);
  assert(multi(2,3), 6);
  assert(div(2,3), 1);
});
