
let chai = require("chai");
let assert =chai.assert;

// Given an array of strings, find the 3 adjacent elements 
// with the longest combined length. Return them in the form of an array.

let combStr= require("../app.js");

//all the same length: ["door","cats","laps","test"];
//allEmpty:["","","",""];
//tooShort["",""]
let tooShort=["",""];
describe("Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.", () =>{
  it("it should return an array with the longest combined length", () =>{
      assert.deepEqual(combStr(["this", "is", "an", "array"]),["is", "an", "array"]);
     

      
  });
  it("should return the first set of 3 adjacent elements if they are the same length", () =>{
      assert.deepEqual(combStr(["","","",""]),["","","",""]);
       assert.deepEqual(combStr(["door","cats","laps","test"]),["door","cats","laps","test"]);
  });
it("should return an error if the array is shorter than 3", ()=>{
    assert.ifError(()=>{ combStr(tooShort)},"input is too short");})

});