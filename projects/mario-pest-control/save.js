// click button to add to goomba
//click button so goomba adds to grand total

//click button so bob's add to bob's total
// click button so bob's adds to grand total


//click button so cheeps adds to total
// click button so cheeps adds to grand total

//click button to reset everything

//  window.onload= function(e){
//   document.getElementById("goomba-total").innerHTML = 0;
//   document.getElementById("bob-total").innerHTML = 0;
//   document.getElementById("cheep-total").innerHTML = 0;
//   document.getElementById("goomba-price-total").innerHTML = 0;
//   document.getElementById("bob-price-total").innerHTML = 0 ;
//   document.getElementById("cheep-price-total").innerHTML = 0;
// }

var grandTotal = 0;
var goomPrice = 5;
var bobPrice = 7;
var cheepPrice = 11;




//adds to goomba total and grand total
var grandTotal = `${charge1}` + `${charge2}` + `${charge3}`;
document.getElementById("goomba-go").addEventListener("click", function() {
  var goomba = document.getElementById("goomba-total").innerHTML = goombaTotal++;
  var charge1 = goomba * goomPrice;
  document.getElementById("goomba-price-total").innerHTML = charge1;
  var grandTotal = `${charge1}` + `${charge2}` + `${charge3}`;
  document.getElementById("grand-total").innerHTML = grandTotal;

});



document.getElementById("bob-go").addEventListener("click", function() {
  var bob = document.getElementById("bob-total").innerHTML = goombaTotal++;
  var charge2 = bob * bobPrice;
  document.getElementById("bob-price-total").innerHTML = charge2;
  var grandTotal = `${charge1}` + `${charge2}` + `${charge3}`;
  document.getElementById("grand-total").innerHTML = grandTotal;

});


document.getElementById("cheep-go").addEventListener("click", function() {
  var cheep = document.getElementById("cheep-total").innerHTML = goombaTotal++;
  var charge3 = cheep * cheepPrice;
  document.getElementById("cheep-price-total").innerHTML = charge3;
  var grandTotal = `${charge1}` + `${charge2}` + `${charge3}`;
  document.getElementById("grand-total").innerHTML = grandTotal;
});


//

//
//
// var grand = 0;
// var goom = 5;
// var bob = 7;
// var cheep =
//
//
//
// //adds to bob total and grand total
// document.getElementById("bob-go").addEventListener("click", function() {
//   var bob = document.getElementById("bob-total").innerHTML = (bobTotal++) * 7;
//   var grand2 = document.getElementById("grand-total").innerHTML = grandTotal + bob;
// });
// //adds to cheep cheep total and grand total
// document.getElementById("cheep-go").addEventListener("click", function() {
//   var cheep = document.getElementById("cheep-total").innerHTML = (cheepTotal++) * 11;
//   document.getElementById("grand-total").innerHTML = grandTotal + cheep;
//
// });
//
//
// //suppose to reset goomba, bob cheep cheep and grand total to zero, but it  sets it to zero, but doesn't reset the counters
// document.getElementById("reset").addEventListener("click", function() {
//
//
//
//   document.getElementById("cheep-total").innerHTML = (cheepTotal = 0);
//   document.getElementById("bob-total").innerHTML = (bobTotal = 0);
//   document.getElementById("goomba-total").innerHTML = (goombaTotal = 0);
//   document.getElementById("grand-total").innerHTML = (grandTotal = 0);
// });
