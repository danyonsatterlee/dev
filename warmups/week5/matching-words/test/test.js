let chai = require("chai");
let assert = chai.assert;


let matching = require("../app.js");


describe("to find repeat words in a string", () => {
  it("should return word if word appears more than once", () => {
    assert.deepEqual(matching("ipsum yaya ipsum"),["ipsum"]);
    assert.deepEqual(matching("iceland something iceland"),["iceland"]);

  });
  it("should return false if word does not appear more than once", () =>{
    assert.deepEqual(matching("shabby chic kids"), []);
    assert.deepEqual(matching("skateboards here we go"), []);
  });
});
