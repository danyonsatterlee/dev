let chai = require("chai");
let assert =chai.assert;

let fizzbuzz= require("../app.js");



describe("fizzbuzz into an array up to 15", () =>{
  it("should return an array up to 15 with fizz if its divisable by 5 and buzz if divisable by 3 and fizzbuzz if divisable by both",()=>{
    assert.deepEqual(fizzbuzz(), [1,2,"buzz",4,"fizz","buzz",7,8,"buzz","fizz",11,"buzz",13,14,"fizzbuzz"]);
  });
})
