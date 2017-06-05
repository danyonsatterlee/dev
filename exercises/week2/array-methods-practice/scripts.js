var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// After every command, console.log() your arrays. This is a good way to do that.
//
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);
// Remove the last item from the vegetable array.
//1111111111
function removeLast(){
  vegetables.splice(3,3);
  return ("vegetables: ", vegetables);
}
console.log(removeLast());


// Remove the first item from the fruit array.

function removeFirst(){
  fruit.splice(0,0);
  return ("fruit: ", fruit);
}
console.log(removeFirst());


// Find the index of "orange."

var findOrange = fruit.indexOf("orange");

console.log(findOrange);


// Add that number to the end of the fruit array.
function addOn(){
fruit.push(findOrange)
  return  fruit;
};
console.log(addOn());
// Use the length property to find the length of the vegetable array. Log that to the console.
console.log("vegetables: ", vegetables.length);
// Add that number to the end of the vegetable array.

function addVeg(){
vegetables.push(vegetables.length)
  return vegetables
}
console.log(addVeg());
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var nutrition = vegetables.concat(fruit);
console.log (nutrition);
// Remove 2 elements from your new array starting at index 4 with one method.
//FIX

function cut(){
  nutrition.splice(4,2)
  return ("fruits and veggies: ", nutrition);
}
console.log("splice");
console.log(cut(nutrition));
// Reverse your array.

function stringy(){

  return nutrition.toString();
};

console.log(stringy());
// If you've done everything correctly, the last step should print the following to the console:
//
// 3,pepper,1,watermelon,orange,apple
