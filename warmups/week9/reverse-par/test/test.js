let chai = require("chai");
let assert =chai.assert;

let reverse= require("../app.js");



describe("in a string reverse what is inside of the parenthases", () =>{
  it("should return a sting with no parenthases and but wahtwas in the parenthases shoudl be reversed the rest of the string normal",()=>{
    assert.equal(reverse("iam(astring)inastring"), "iamgnirtsainastring" );
      assert.equal(reverse("word(word)word"), "worddrowword" );
  });
})