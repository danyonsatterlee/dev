// Write a function that accepts two numbers as parameters, and returns the sum.
function add(num1, num2) {
  return (num1 + num2);
}
console.log(add(2, 3));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largest(num1, num2, num3) {
  if (num1 > num2 && num3) {
    return (num1);
  } else if (num2 > num1 && num3) {
    return (num2);
  } else {
    return (num3);
  }
};
console.log(largest(10, 5, 6));
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOdd(num1) {
  if (num1 % 2 === 0) {
    return ("even");
  } else {
    return ("odd");
  }
}
console.log(evenOdd(100));
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function string(sentence) {
  if (sentence.length <= 20) {
    return (sentence + " " + sentence);
  } else {
    var res = sentence.substr(0, (sentence.length / 2));
    return (res);
  }
}
console.log(string("tralala boom de yeah! tralalalalalala"));

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// function fibonacci(n) {
//
//   var new = (Math.pow(phi, 3)-Math.pow(phi, 3))/SQRTn;
//
// }
// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
function quad(a, b, c) {
  if (a === 0) {
    return ("this is linear");
  } else {
    // var x1 = -(b) + (Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
    // var x2 = -(b) - (Math.sqrt((b * b) - (4 * a * c))) / 2 * a;
    var power = b*b //b*b
    var second = (4 * a * c);
    var insideSqr = power - second;
    var sqr = (Math.sqrt(insideSqr));
    // function (insideSqr) {
    //   if (insideSqr > 0) {
    //     (Math.sqrt(insideSqr));
    //     return (sqr)
    //
    //   } else {
    //     var positive = insideSqr * (-1);
    //      (Math.sqrt(positive));
    //      return (sqr)
    //   }
    // }

      var bottom = (2 * a);
      var divide = sqr / bottom;
      var x1 = -b + divide;
      var x2 = -b - divide;
    var result = [x1, x2];
    return (result);

  }
}
console.log(quad(5, 5, 0));




// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
