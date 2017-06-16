// table, couch, chair, moving into a new apartment 3 constructors, two instances of each

var LivingRoom = function(piece, quantity, color, material) {
  this.piece = piece;
  this.quantity = quantity;
  this.color = color;
  this.material = material;

};

var couch = new LivingRoom("couch", 1, "brown", "leather");
var coffeeTable = new LivingRoom("coffee table", 1, "light brown", "wood");

console.log(coffeeTable);
console.log(couch);

var KitchenUtensils = function (piece, quantity, material){
  this.piece = piece;
  this.quantity = quantity;
  this.material = material;
};

var silverWare = new KitchenUtensils(["spoons", "forks", "knives"], 20, "silver");
var spatula = new KitchenUtensils("spatula", 2, "wood");

console.log(silverWare);

console.log(spatula);

var BedRoom= function (piece, color,  material){
  this.piece = piece;
  this.color = color;
  this.material = material;

};

var myBed = new BedRoom("bed", "black", "wood");
var nightStand = new BedRoom("night stand", "white", "tin");

console.log(myBed);
console.log(nightStand);
