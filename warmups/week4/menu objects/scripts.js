// // you're making a resturant menu. write three object literals and then a constructor function for three more dishes. if you finish, write a method to print it.
//
// var pancakes = {
//   toppings: "Strawberry",
//   batter: "wheat",
//   additional: "whipped cream"
// };
//
// var oatmeal = {
//   toppings: ["almonds", "cranberry", "brown sugar"],
//   tempature: "hot",
//   portions: ["small", "large"]
// };
//
// var grits = {
//   style: ["cheese", "plain"],
//   portions: ["small", "large"]
// };
//
// var MainDishes= function (dish, side, cost){
//   this.dish=dish;
//   this.side=side;
//   this.cost=cost;
//   this.print=function(){
//     console.log("I will have the " + this.dish+" with a side of " +this.side +" and " +this.cost+ " to drink.");
//   }
// }
// var menuArray=[];
// var biscuitsGravy = new MainDishes("biscuits and gravy", "hashbrowns", 5);
// var dailySpecial = new MainDishes("pancakes", ["bacon","eggs"], 7);
// var waffles = new MainDishes ("waffles", "bacon", 7);

// biscuitsGravy.print();
//
// menuArray.push(biscuitsGravy, dailySpecial, waffles);
//
// console.log(menuArray);

var breakfast = document.getElementById("breakfast");
var drinks = document.getElementById("beverage");

var addItem = function(name, side, price, divName) {
  var item = document.createElement("div");
  //menu item name
  var title = document.createElement("h4");
  title.innerHTML = name;
  item.appendChild(title);
  //price
  var priceElem = document.createElement("p");
  priceElem.innerHTML = "$ " + price;
  priceElem.setAttribute("class", "pull-right");
  item.appendChild(priceElem);
  // side or description
  var sideElem = document.createElement("p");
  sideElem.innerHTML = side.join(", ");
  item.appendChild(sideElem);
// adding it into the proper div of either breakfast or drinks
  divName.appendChild(item);
};



addItem("Flap-Jacks", ["pancakes", "bacon", "eggs sunny side up"], 7, breakfast);
addItem("Sunrise Breakfast", ["2 pancakes", "sausage", "bacon", "hashbrowns"], 10, breakfast);
addItem("Egg-tastic", ["ommlette", "green peppers", "tomatoe", "cheddar cheese", "choice of sausage or bacon"], 7, breakfast);
addItem("Waffle Haven", ["1 belgium waffle", "whip cream", "maple syrup", "choice of in season fruit topping"], 10, breakfast);

addItem("Cup 'o Joe", ["the staple cup of coffee", "free refills"], 2, drinks);
addItem("Juice", ["large or small", "orange", "apple", "grape", "guave"], 2, drinks);
addItem("Tea", ["English Breakfast", "Peppermint", "Chai", "Green"], 2, drinks);
