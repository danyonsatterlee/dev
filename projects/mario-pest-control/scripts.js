
 window.onload= function(e){
  document.getElementById("goomba-total").innerHTML = 0;
  document.getElementById("bob-total").innerHTML = 0;
  document.getElementById("cheep-total").innerHTML = 0;
  document.getElementById("goomba-price-total").innerHTML = 0;
  document.getElementById("bob-price-total").innerHTML = 0 ;
  document.getElementById("cheep-price-total").innerHTML = 0;
}

var goombaCoins = 5;

var goombaTotal = 0;
var bobCoins = 7;
var cheepCoins = 11;
var bobTotal=0;
var cheepTotal = 0;
var moneyGoomba = 0;

function goomba() {
  document.getElementById('goomba-go').addEventListener("click", function() {
    goombaTotal++

document.getElementById('pest-img-goob').classList.toggle('pulse');
    document.getElementById('goomba-total').innerHTML = goombaTotal;
    var moneyGoomba = goombaTotal * goombaCoins;
    document.getElementById('goomba-price-total').innerHTML = moneyGoomba;
})
    document.getElementById('bob-go').addEventListener("click", function() {
      bobTotal++
      document.getElementById('bob-total').innerHTML = bobTotal;
      var moneyBob = bobTotal * bobCoins;
      document.getElementById('bob-price-total').innerHTML = moneyBob;

  })
  document.getElementById('cheep-go').addEventListener("click", function() {
    cheepTotal++
    document.getElementById('cheep-total').innerHTML = cheepTotal;
    var moneyCheep = cheepTotal * cheepCoins;
    document.getElementById('cheep-price-total').innerHTML =
    (moneyCheep);

  })






}

// var total1 = document.getElementbyId("goomba-price-total").innerHTML = goombaNum* goombaCoins;
goomba();






document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("cheep-total").innerHTML = (cheepTotal = 0);
  document.getElementById("cheep-price-total").innerHTML = (moneyCheep=0);
  document.getElementById("bob-total").innerHTML = (bobTotal = 0);
  document.getElementById("bob-price-total").innerHTML = (moneyBob= 0);
  document.getElementById("goomba-total").innerHTML = (goombaTotal = 0);
    document.getElementById("goomba-price-total").innerHTML = (moneyBob = 0);
  document.getElementById("grand-total").innerHTML = (grandTotal = 0);
});
