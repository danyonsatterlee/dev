var chai = require("chai");
var assert = chai.assert;

// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

var myFunctions = require("../app.js");
var cut = myFunctions.cut;
var mod = myFunctions.mod;
describe("two positive numbers return true if same last digit", function() {
  it("should return true", function() {
    assert.equal(mod(80, 10), true);
    assert.equal(mod(44, 14), true);
  });
  it("should return false", function() {
    assert.equal(mod(33, 5), false);
    assert.equal(mod(29, 76), false);

  });

});

//// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

describe("cut the first and last character in a string", function() {
  it("return no first or last", function() {
    assert.equal(cut('hello'), 'ello');
    assert.equal(cut('shark'), 'hark');
  });

});
