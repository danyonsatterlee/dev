
let chai = require("chai");
let assert =chai.assert;


let fizzBuzz= require("../app.js");


describe("to print an array for the problem FizzBuzz", () =>{
  it("should append fizz to an array if the number is divisiable by 3 buzz for 5 and Fizzbuzz for both", () =>{
    assert.deepEqual(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz",16,17,"fizz",19,"buzz"]);
  });

  
});



