function add(add1, add2, add3, add4, add5) {
  return (add1 + add2 + add3 + add4 + add5);
}

console.log(add(6, 10, 1,2,3) + " is a great age!");

function sub(num1, num2) {
  return (num1 - num2);
}

console.log(sub(10, 5) * 10 * 100);

function multi(c, d) {
  if (c >= d) {
    return (c * c * c * d * d * d);
  } else {
    return (c * d);
  }

}
console.log(multi(10, 11) + " two numbers were multiplied together to get this number");

multi(20, 10);

function divide(e, f) {
  if (e > f) {
    return (e / f);
  } else {
    return (f / e);
  }
}

console.log(divide(10, 100) + " two numbers were diveded to get this number");
