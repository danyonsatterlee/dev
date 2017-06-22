var assert = function(actual, expected){
  if(expected !=actual){
    throw{ actual:actual, expected: expected}
    } else{
      console.log("win", { actual: actual, expected: expected});
    }

};

var describe = function(message, testFunc) {
  console.log(message);
  try {
    testFunc();
  } catch (err) {
    console.log("error boooo hisss", err)
  }

};


var form = document.getElementById("airline-form");
var submit = document.getElementById('submit');
// var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first"].value;
    describe("input form", function(){
      assert(firstName, "Suzie");

    });

    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push("vegan");
    }
    if (form.elements['gluten'].checked) {
        diet.push('gluten');
    }
    if (form.elements['paleo'].checked) {
        diet.push('paleo');
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
