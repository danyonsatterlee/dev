document.getElementById("myDiv").style.color = "white";
document.getElementById("myDiv").style.fontSize = "40px";
document.getElementById("myDiv").style.backgroundColor = "pink";
document.getElementById('myDiv').style.fontFamily = "cursive";
document.getElementById('myDiv').style.textAlign = "center";
document.body.style.backgroundColor = "lightyellow";
document.getElementById('myDiv').innerHTML = "Bunny Foo Foo is Sad";
document.getElementById('turkey').innerHTML = "Turkey's came after Bunny Foo Foo"
document.getElementById('turkey').style.textAlign = "center";
document.getElementById('turkey').style.fontFamily = "sans-serif";
document.getElementById('turkey').style.textTransform = "uppercase";
document.getElementById('turkey').style.color = "gray";
document.getElementById('turkey').style.marginTop = "50px";
document.getElementById('theEnd').style.marginTop = "50px";
document.getElementById('theEnd').style.color = "black";
document.getElementById('theEnd').style.fontFamily = "sans-serif";
document.getElementById('theEnd').style.textTransform = "uppercase";
document.getElementById('theEnd').style.fontSize = "100px";
document.getElementById('theEnd').innerHTML = "bunny lost"
document.getElementById('theEnd').style.textAlign = "center";

//three clicks not working yet
// var counter = 0;
// document.getElementById("theEnd").addEventListener("click", function() {
//   document.getElementById("theEnd").innerHTML = "Or did he????";
//   counter++;
//   if (counter === 1) {
//     document.getElementById("theEnd").innerHTML = "stay tuned";
//     counter++;
//   } else {
//     (counter === 2 || counter === 0)
//     document.getElementById('theEnd').innerHTML = "bunny lost";
//     counter = 0;
//   }
//
//   console.log(counter);
// });


document.getElementById("turkey").addEventListener("mouseover", function() {
  document.getElementById("turkey").style.color = "red"

});

document.getElementById("turkey").addEventListener("mouseleave", function() {
  document.getElementById("turkey").style.color = "gray";

});


document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("turkey").innerHTML = document.getElementById("allen").value;
});
