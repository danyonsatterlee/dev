let chai = require("chai");
let assert =chai.assert;

let repeat= require("../app.js");


describe("repeat a string for a number of times", ()=>{
    it("should return a string with a given number of times", ()=>{
        assert.equal(repeat("WTF", 2), "WTFWTF");
        assert.equal(repeat("candy", 5), "candycandycandycandycandy");
    });
    it("should throw an error if count is negative", ()=>{
        assert.throws(()=>{repeat("silly",0), "count is not valid"});
        assert.throws(()=>{repeat("silly",-1), "count is not valid"});
    });
      
});