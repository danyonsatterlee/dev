var danyon = {
  name: "Danyon",
  age: 28,
  occupation: "student",
  friends: [{
      // shelby:
      //
      name: "Shelby",
      age: 26,
      occupation: "artist",
      hobbies: ["drawing", "movies"],
      motto: function() {
        console.log("Life is an art")
      },
      location: {
        country: "United States",
        state: "California",
        city: "Los Angeles"
      }

    },
    {
      name: "Karis",
      age: 25,
      occupation: "production crew",
      hobbies: ["travel", "hiking"],
      location: {
        country: "United States",
        state: "California",
        city: "Los Angeles"
      }
    },
    {
      // mandy:
      name: "Mandy",
      age: 29,
      occupation: "administration",
      hobbies: ["video games", "cars"],
      motto: function() {
        console.log("Loyalty is the glue of life")
      },
      location: {
        country: "United States",
        state: "Montana",
        city: "Billings"
      }

    },
    {
      // ginger:
      name: "Ginger",
      age: 31,
      occupation: "ministry",
      hobbies: ["house flipping", "writing"],
      motto: function() {
        console.log("dance through life!")
      },
      location: {
        country: "United States",
        state: "Hawaii",
        city: "Honolulu"
      }

    },
    {
      // kristian:
      name: "Kristian",
      age: 31,
      occupation: "teacher",
      hobbies: ["blogging", "old movies"],
      motto: function() {
        console.log("kindness is key")
      },
      location: {
        country: "United States",
        state: "Wyoming",
        city: "Cody"
      }

    },
    {
      // andy:
      name: "Andy",
      age: 29,
      occupation: "teacher",
      hobbies: ["hiking", "photography"],
      photography: function() {
        console.log("Andy is great at photography!");

      },
      location: {
        country: "United States",
        state: "Montana",
        city: "Billings"
      }

    },
    {
      // jenna:
      name: "Jenna",
      age: 27,
      occupation: "nurse",
      hobbies: ["photography", "travel"],
      motto: function() {
        console.log("A smile goes a long way!")
      },
      location: {
        country: "United States",
        state: "Idaho",
        city: "Moscow"
      }

    }
  ]
};
danyon.friends[6].motto();
console.log(danyon.friends[6].location.state);
