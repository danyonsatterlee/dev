var readlineSync = require('readline-sync');

let cal= require("./cal.js")
let sub = cal.sub;
let add = cal.add;
let div = cal.div;
let mul = cal.mul;
let mod = cal.mod;

console.log("welcome to my things that does numbers");
let run = () =>{
let num1 = readlineSync.question('Give me a number');
num1 = Number(num1);
let num2 = readlineSync.question('Give me another number');
num2 = Number(num2);
let calculation = readlineSync.question('Do you want to add, subtract, divide, multiply or find the remainder of these two numbers?');
if(calculation === "add"){
    console.log(add(num1, num2));
} else if(calculation ==="subtract"){
    console.log(sub(num1, num2));
} else if(calculation ==="multiply"){
    console.log(mul(num1, num2));
} else if(calculation ==="divide"){
    console.log(div(num1, num2));
} else if(calculation ==="remainder"){
    console.log(mod(num1, num2));
} else{
    console.log("that's not a command");
}

}

run();
