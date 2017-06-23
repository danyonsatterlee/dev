var chai = require("chai");
var assert = chai.assert;
//import code
var myCalc = require("../app.js");
var add = myCalc.add;
var sub = myCalc.sub;
var multi = myCalc.multi;
var divide = myCalc.divide;

//or assert.equal(myCalc.add(2,2),4);
describe("a calculator", function(){
  it("should return the sum of two numbers", function(){
    assert.equal(add(2,2),4);
    assert.equal(add(1,1),2);
  });
  it("should return the sub of two numbers", function(){
    assert.equal(sub(2,2),0);
    assert.equal(sub(10,5),5)
  });
  it("should return the muliplication of two numbers", function(){
    assert.equal(multi(2,2),4);
    assert.equal(multi(10,5),50)
  });
  it("should return the division of two numbers", function(){
    assert.equal(divide(2,2),1);
    assert.equal(divide(10,5),2)
  });
});
