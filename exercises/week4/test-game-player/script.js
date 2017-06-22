// Character video game
//name, health, inventory
// methods of takeDamage --> subtract damage from health
//heal Damage - > add health to health
//addItemtoInv - > add a string to your inventory

var Player = function (name, health, inv){
  this.name =name;
  this.health = health;
  this.inv = [];
  this.takeDamage = function(dm){
    this.health-=dm

  };
  this.healthDamage = function(dm){
    this.health += dm;
  };
  this.addItem = function (item){
    this.inv.push(item);
  };
}

// healDamage = heal+damage
// takeDamage = health - damage
// add to inventory player.this.inv.push("item")
var assert = function(actual, expected){
  if(expected !=actual){
    throw{ actual:actual, expected: expected}
    } else{
      console.log("win", { actual: actual, expected: expected});
    }

};
var describe = function(message, testFunc) {
  console.log(message);
  try {
    testFunc();
  } catch (err) {
    console.log("error boooo hisss", err)
  }

};

describe("Test group", function() {
  assert(true, true);
  assert("Some string", "Some string");
  assert(1, 1);
});


describe ("test chracter attributes",function(){
  var player= new Player("testPlayerName");
  assert(player.name, "testPlayerName");
  assert(player.health, 100);
  assert(player.inv.length, 0);
});

describe("test character methods", function(){
    var player= new Player("testPlayerName");
    player.takeDamage(30);
    assert(player.health, 70);
    player.healthDamage(25);
    assert(player.health, 95);
    player.addItem("sword");
    assert(player.inv.length,1);
});
