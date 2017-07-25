
// First, you mash in a random large number to start with. Then, repeatedly do the following:
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".


let readlineSync = require('readline-sync');

let thisNumber = readlineSync.question('Enter in a number');
let getNumber =Number(thisNumber);

while (getNumber !== 1) {

 if(getNumber %3 ===0){
        getNumber = getNumber / 3;
        console.log("This number was divisible by three, your new number is "+getNumber);
    } else if(getNumber % 3 !==0){
        getNumber= getNumber + 1
        console.log("added 1 to get number to be divisible by three " +getNumber);

    } else if(getNumber ===1){
        break;
    }
}

