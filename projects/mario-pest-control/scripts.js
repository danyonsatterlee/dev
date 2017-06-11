window.onload = function(e) {
  document.getElementById("goomba-total").innerHTML = 0;
  document.getElementById("bob-total").innerHTML = 0;
  document.getElementById("cheep-total").innerHTML = 0;
  document.getElementById("goomba-price-total").innerHTML = 0;
  document.getElementById("bob-price-total").innerHTML = 0;
  document.getElementById("cheep-price-total").innerHTML = 0;
}

var goombaCoins = 5;

var goombaTotal = 0;
var bobCoins = 7;
var cheepCoins = 11;
var bobTotal = 0;
var cheepTotal = 0;
var moneyGoomba = 0;
var moneyCheep = 0;
var moneyBob = 0;
var grandTotal;

var goomba = function() {
  document.getElementById('goomba-go').addEventListener("click", function() {
    goombaTotal++

    // document.getElementById('pest-img-goob').classList.toggle('pulse');
    document.getElementById('goomba-total').innerHTML = goombaTotal;
    moneyGoomba = goombaTotal * goombaCoins;
    console.log(moneyGoomba);
    document.getElementById('goomba-price-total').innerHTML = moneyGoomba;
  })
};
var bob = function() {
  document.getElementById('bob-go').addEventListener("click", function() {
    bobTotal++
    document.getElementById('bob-total').innerHTML = bobTotal;
    moneyBob = bobTotal * bobCoins;
    document.getElementById('bob-price-total').innerHTML = moneyBob;
  })
};

var cheep = function() {
  document.getElementById('cheep-go').addEventListener("click", function() {
    cheepTotal++
    document.getElementById('cheep-total').innerHTML = cheepTotal;
    moneyCheep = cheepTotal * cheepCoins;

    document.getElementById('cheep-price-total').innerHTML = moneyCheep;
  })
};
// document.getElementById('grand-total-go').innerHTML= moneyGoombs;
// var total = function(){
//   if (cheep.onclick ===true || bob.onclick ===true || goomba.onclick ===true){
//     console.log("hello");
//     document.getElementById('grand-total-go').innerHTML= moneyGoombs;
//   } else {
//     console.log("no");
//   }
// };
goomba();
bob();
cheep();
//
var total = document.getElementsByClassName('go');
for (var i = 0; i < total.length; i++) {
  total[i].addEventListener("click", function() {
    document.getElementById('grand-total').innerHTML = Number.parseInt(moneyGoomba + moneyBob + moneyCheep);
  })
};











// var total1 = document.getElementbyId("goomba-price-total").innerHTML = goombaNum* goombaCoins;








document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("cheep-total").innerHTML = (cheepTotal = 0);
  document.getElementById("cheep-price-total").innerHTML = (moneyCheep = 0);
  document.getElementById("bob-total").innerHTML = (bobTotal = 0);
  document.getElementById("bob-price-total").innerHTML = (moneyBob = 0);
  document.getElementById("goomba-total").innerHTML = (goombaTotal = 0);
  document.getElementById("goomba-price-total").innerHTML = (moneyBob = 0);
  document.getElementById("grand-total").innerHTML = (grandTotal = 0);
});
