
let chai = require("chai");
let assert =chai.assert;

// Given a string of even length, return a string made of the middle two chars,
// so the string ‘string’ yields ‘ri’. The string length will be at least 2.

let middleChar= require("../app.js");


describe(" Given a string of even length, return a string made of the middle two chars", () =>{
  it("it should return the two middle characters", () =>{
    assert.equal(middleChar("apples"), "pl");
    assert.equal(middleChar("that"), "ha");
    assert.equal(middleChar("candycanes"), "yc");
    assert.equal(middleChar("string"), "ri");
    assert.equal(middleChar("as"), "as");
  });

  it("shoudl not return false if not even", () => {
    assert.equal(middleChar("sissy"), false);
     assert.equal(middleChar("a"), false);
     assert.isNaN(middleChar(""));
  });
});