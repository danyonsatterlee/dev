

// same as let chai = require("chai"); and let assert = chai.assert; to add the one part of chai we want
// import {assert} from "chai";

let chai = require("chai");
let assert = chai.assert;

//import
let dictionary = require("../app.js");
let addWord = dictionary.addWord;
let lookUpWord= dictionary.lookUpWord;
// same as above
// import{addWord, lookItup} from "../app.js" mocha does not support ES 6 imports yet

describe("A dictionary to add and look up words", () => {
  it("should store the word when added", () => {
    addWord("blueberry", "a blue berry");
    assert.equal(lookUpWord("blueberry"), "a blue berry");
    addWord("flower", "a plant with petals");
    assert.equal(lookUpWord("flower"), "a plant with petals");

  });
  it("should return null when lookup word is not present", () => {
    assert.equal(lookUpWord("flabbergasted"), null);
    assert.equal(lookUpWord("frolick"), null);
  });
});
