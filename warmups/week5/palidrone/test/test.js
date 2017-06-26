var chai = require("chai");
var assert = chai.assert;

//import

var temp = require("../app.js");
var isPal = temp.isPal;



describe("it will reverse the word if it is a palandrone", function(){
  it("should return true if plain word is palidrome", function(){
      assert.equal(isPal("dad"), true);
      assert.equal(isPal("Amy must I jujitsu my ma"), true);
  });
  it("should return false if plain word is not a palidrome", function(){
      assert.equal(isPal("cathy"), false);
      assert.equal(isPal("candy"), false);
  });
  it("shoudl return true if a palandrone has caps, spaces, or special characters", function(){
    assert.equal(isPal("Avid diva"), true);
      assert.equal(isPal("Mom!!!"), true);
  });


});
