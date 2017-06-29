// Given an int n, return True if it is within 10 of 100 or 200.

let chai = require("chai");

let assert = chai.assert;


let find= require("../app.js");


describe("if an interger if 10 of 100 or 200 return true", ()=> {
  it("should return true if number is 90-110 or 190-210", ()=> {
    assert.equal(find(101), true);
    assert.equal(find(191), true);
    assert.equal(find(200), true);
  });
  it("should return false if number is not with in 90-110 or 190-210", () =>{
    assert.equal(find(189), false);
    assert.equal(find(8), false);
  });
});
