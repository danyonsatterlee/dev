document.getElementById("addTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("add1").value) + Number(document.getElementById("add2").value);
  document.getElementById("result").innerHTML = result

});

document.getElementById("subTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("sub1").value) - Number(document.getElementById("sub2").value);
  document.getElementById("result").innerHTML = result

});

document.getElementById("mulTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("mul1").value) * Number(document.getElementById("mul2").value);
  document.getElementById("result").innerHTML = result

});

document.getElementById("divideTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("div1").value) / Number(document.getElementById("div2").value);
  document.getElementById("result").innerHTML = result

});

document.getElementById("moduleTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("mod1").value) % Number(document.getElementById("mod2").value);
  document.getElementById("result").innerHTML = result

});
