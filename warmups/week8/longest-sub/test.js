let chai= require("chai");
let assert = chai.assert;

let clock = require("../app.js");

describe("take in a time in military and output a time in words with am pm ", () =>{
    it("it should return a word in am pm", ()=>{
        // assert.equal(clock("12:01"), "it's tweleve oh one pm");
        assert.equal(clock("21:00"), "it's nine pm");
        assert.equal(clock("01:30"), "it's one thirty am");
        assert.equal(clock("09:45"), "it's nine forty-five am");
    });
       it("should throw an error", ()=>{
       assert.throws(() => {clock("Hello")}, "not valid input");
  
    });
    
   
});