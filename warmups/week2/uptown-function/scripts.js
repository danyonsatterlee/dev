// https://coursework.vschool.io/uptown-function-you-up/


var lyrics = ["This", "hit", "that", "ice", "cold",
"Michelle", "Pfeiffer", "that", "white",
"gold", "This", "one", "for", "them",
"hood", "girls", "Them", "good", "girls",
"straight", "masterpieces", "Stylin'",
"whilen'", "livin'", "it", "up", "in",
"the", "city", "Got", "Chucks", "on",
"with", "Saint", "Laurent", "Gotta", "kiss",
"myself", "I'm", "so", "pretty"];
function paragraph() {
  return (lyrics.join(' '));
}
console.log(paragraph());

function backwards(){
  lyrics.reverse();
  return (lyrics.join(' '));

}
console.log(backwards());


var everyOtherWord = function (arr){
  for(var i = 0; i <arr.length; i +=2){
    console.log(arr[i]);
  }
}
everyOtherWord(lyrics);
