let chai = require("chai");
let assert = chai.assert;


let same = require ("../app.js");

// Given a multidimensional array of any size (but never empty) containing primitive data types, write a function that determines whether its elements belongs to the same data type (edited)
//
//
// `[[1,2,3], [4,5,6],[7,8,9]]` will return true (edited)
//

// `[[1,2,"3"],[4,5,"6"],[7,"8",9]]` will return false

describe("check to see if arrays have the same data type or not", () => {
  it("should return true when same data type", () =>{
    assert.equal(same([[0,3,4,5], [8,4,5]]), true);
      assert.equal(same([[0,33,5], [8,43,888]]), true);
  });
  it("should return false when data types are not the same", ()=>{
    assert.equal(same([[1,2,"3"], [4,5,"6"]]), false);
    assert.equal(same([[1,8,"sam"], [1,5,"6"]]), false);
  });
});
