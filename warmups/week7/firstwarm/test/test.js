
let chai = require("chai");
let assert =chai.assert;


let parenth= require("../app.js");


let noClosing = "((idfgisudfiuiu)";
let noOpening = ")dsgdfg))";
let matching = "((dagfadfgd))";

describe("balancing parentheses", () =>{
  it("should return false if there's not enough opening parantheses",()=>{
    assert.equal(parenth(noOpening), false);
  });
  it("should return false if there's not enough closing parantheses", ()=>{
    assert.equal(parenth(noClosing), false);
  });
  it("should return true if each opening paranthesis has a matching closing paranthesis", ()=>{
    assert.equal(parenth(matching), true);
  });
});