document.getElementById("addTogether").addEventListener("click", function() {
  var result = Number(document.getElementById("add1").value) + Number(document.getElementById("add2").value);
  document.getElementById("result").innerHTML = result

});
