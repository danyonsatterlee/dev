let chai= require("chai");
let assert = chai.assert;

let frameIt = require("../app.js");

describe("return a set of nested arrays  that will frame a word", () =>{
    it("shoudl return the frame", ()=>{
      
        assert.deepEqual(frameIt("saturn"), [ ["*","*","*","*","*","*","*","*"],
        ["*","s","a","t","u","r","n","*"],
        ["*","*","*","*","*","*","*","*"]]);

    });

});