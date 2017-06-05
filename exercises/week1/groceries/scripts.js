var shopper = {
  whatIAmHungryFor: " I want Spaghetti!",
  groceryCart: ["pasta", "tomatoe sauce", "meatballs"],
  desiredNumberGuests: 8,
  makeFood: function() {
    console.log(shopper.whatIAmHungryFor + "I better invite some friends over to share!");
  },
  partyTime: function(guests) {
    if (guests < 8) {
      console.log("no party")
    } else {
      console.log("party time!")
    }

  }
};

shopper.makeFood();
shopper.partyTime(1);
