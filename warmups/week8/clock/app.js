// No more hiding from your alarm clock! You've decided you want your computer
// to keep you updated on the time so you're never late again. A talking clock
// takes a 24-hour time and translates it into words. Input Description An hour
// (0-23) followed by a colon followed by the minute (0-59). Output Description
// The time in words, using 12-hour format followed by am or pm. Sample Input
// data 00:00 01:30 12:05 14:01 20:29 21:00 Sample Output data It's twelve am
// It's one thirty am It's twelve oh five pm It's two oh one pm It's eight
// twenty nine pm It's nine pm
///////TEST.JS//////////
let chai= require("chai");
let assert = chai.assert;

let clock = require("../app.js");

describe("take in a time in military and output a time in words with am pm ", () =>{
    it("it should return a word in am pm", ()=>{
        // assert.equal(clock("12:01"), "it's tweleve oh one pm");
        assert.equal(clock("21:00"), "it's nine pm");
        assert.equal(clock("01:30"), "it's one thirty am");
        assert.equal(clock("09:45"), "it's nine forty-five am");
    });
       it("should throw an error", ()=>{
       assert.throws(() => {clock("Hello")}, "not valid input");
  
    });
    
   
});



//////////APP.JS///////


var converter = require('number-to-words');


let clock = (time) => {

    let tt = time.split(":");
    let hour = Number(tt[0]);
    let mins = Number(tt[1]);
    console.log(hour);
    if(isNaN(tt[0])===true){
         throw new Error("not valid input");
      
  
    }
    let printMins = converter.toWords(mins);

    let printHour = converter.toWords(hour);
    console.log(printHour);
/// pm greater than 10

   if (hour > 12 && mins > 10 && mins >0) {
        let newHour = hour - 12;
        let printHour2 = converter.toWords(newHour);
        return "it's " +printHour2 + " " + printMins + " pm";
        // am greater than 10
    } else if (hour < 12 && hour >= 1 && mins > 10) {
        return "it's " + printHour + " " + printMins + " am";
        // midnight greater than 10
    } else if (hour === 00 && mins > 10) {
        return "it's tweleve " + printMins + " am";
        //noon greater than 10
    } else if (hour === 12 && mins > 10) {
        return "it's tweleve " + printMins + " pm";
// pm less than 10
    } else if (hour > 12 && mins > 10 && mins >0) {
          let newHour = hour - 12;
       let printHour2 = converter.toWords(newHour);
        return "it's " +printHour2+ " oh " + printMins + " pm";
    //am less than 10
    } else if (hour < 12 && hour > 1 && mins > 10) {
        return "it's " + printHour + " oh " + printMins + " am";
        // midnight less than 10
    } else if (hour === 00 && mins > 10) {
        return "it's tweleve oh " + printMins + " am";
        // noon less than 10
    } else if (hour === 12 && mins > 10) {
        return "it's tweleve oh " + printMins + " pm";
    }

//////
// on the hour pm
     else if (hour > 12  && mins===0) {
        let  newHour = hour - 12;
       let  printHour2 = converter.toWords(newHour);
        return "it's " +printHour2+ " pm";
   // on the hour am
     } else if (hour < 12 && hour > 1 &&  mins===0) {
        return "it's " + printHour + " am";
        // on the hour midnight
    } else if (hour === 00 && mins===0) {
        return "it's tweleve am";
        // on the hour noon
    } else if (hour === 12 && mins===0) {
        return "it's tweleve pm";

    } 
 
}

module.exports = clock;

