let chai = require("chai");
let assert = chai.assert;


let doubleX = require("../app.js");


// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.

// var doubleX=function(str) {
//(word[i] === word[i++] && word[i]==="x",
// }

describe("double x finder", () => {
  it("should return true if two x's side by side only first instance", () => {
    assert.equal(doubleX("xx"), true);
    assert.equal(doubleX("exxtra"),true);
  });
  it("should return false when no double x on only the first time", () => {
    assert.equal(doubleX("jax"), false);
    assert.equal(doubleX("xjxx"), false);
  });
});
