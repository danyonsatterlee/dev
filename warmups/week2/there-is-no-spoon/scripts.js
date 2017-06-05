var coffee = {
  container : "cup",
  isFull: true,
  style: "regular",
  fillUp: function(){
    if (this.isFull === true){
      return("Coffee is full");
    } else {
      return ("Can I fill up your cup?");
    }

  }

};
  console.log(coffee.fillUp());

var computer = {
  brands : ["mac", "asus"],
  isOn: true,
  colors : ["silver", "black"],
  want: function() {
    return("There are two brands in the class room" +" "+ this.brands[0] + " and " + this.brands[1]);
  }
};
console.log(computer.want());

var students = {
  inClass : true,
  numberOf: 11,
  male: 8,
  female: 3,
  add: function(female, male){
    return (this.female+this.male);
  }
};
console.log(students.add());

var bottle = {
  contents: "water",
  isFull: false,
  color: "pink",
};

var chairs = {
  color: ["black", "white", "blue"],
  numberOfLegs: 4,
  style :{
   one: "black",
   two: "eurgenomic"
 },
 sit: function(){
   return ("I want to sit in a " +this.color[1]+" chair")
 }
 };

 console.log(chairs.sit());

 var phones = {
   brand: ["apple", "android", "samsung"],
   provider: ["Verizon", "At&T"],
   numberOf: 12
 };

 var studentOrigin = {
   state: ["Utah", "Wyoming", "Michigan"],
   numberofCities: 11,
   areAmerican: true,
   question: function(){
     return("How many people are from "+ this.state[2]+ "?");
   }
 };

 console.log(studentOrigin.question());

 var hot = {
   wearingShorts: 2,
   wearingtShirts: 11,
   wearingClothes: true
 }

 var doors = {
   type: ["wood", "metal"],
   open: true,
   hasHandles: true
 };

 var music = {
   isPlaying: {
     speakers: true,
     style: "classical",
     isOn: true
   },
   headphones:{
     hasHeadphones: true,
     on: false,
     color: "Pink"
   },
   likesMusic: true
 };
