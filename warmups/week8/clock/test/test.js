// No more hiding from your alarm clock! You've decided you want your computer to keep you updated on the time so you're never late again. A talking clock takes a 24-hour time and translates it into words.
// Input Description
// An hour (0-23) followed by a colon followed by the minute (0-59).
// Output Description
// The time in words, using 12-hour format followed by am or pm.
// Sample Input data
// 00:00
// 01:30
// 12:05
// 14:01
// 20:29
// 21:00
// Sample Output data
// It's twelve am
// It's one thirty am
// It's twelve oh five pm
// It's two oh one pm
// It's eight twenty nine pm
// It's nine pm

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