
let chai = require("chai");
let assert =chai.assert;


let primeTime= require("../app.js");


describe("check to see if a number is prime or not", () =>{
  it("it shoudl return true if a number is prime", () =>{
    assert.equal(primeTime(7), "prime");
  });

  it("shoudl not return a table", () => {
    assert.equal(primeTime(4), false);
  });
});



