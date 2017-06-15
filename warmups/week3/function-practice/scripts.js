// Write a function to square a number and return the result

var sqr = function(x) {
  return x * x;
};

console.log(sqr(5));

var root = function(x) {
  return Math.sqrt(x)
};

console.log(root(16));

var arrayTotal = [2, 3, 4, 5, 6, 7, 45, 3, 3, 5, 6];
var newTotal = 0;

var addThem = function(arr) {
  for (i = 0; i < arr.length; i++) {
    newTotal += arr[i];

  }
  return newTotal;

};

console.log(addThem(arrayTotal));


var largest = function(arr){
  return Math.max(...arr)
};

console.log(largest(arrayTotal));
