//wizards assignment:

//create a wizard class that has the following properties:
//name: String,
// HP: numer,
// spells: array of strings

//methods:
//attack:

//wizards assignment:

//create a wizard class that has the following properties:
//name: String//
//hp: Number
//spells: Array of objects representing spells
  //each spell will have a name property and a damage property;

//methods:
//attack will deal damage to another wizard based on which spell is used.


//create a group of wizards that are battling it out by calling attack methoeds.

class Wizard {
  constructor(name, hp, spells){
    this.name = name;
    this.hp = hp;
    this.spells = spells
  }
  attack(wizard, spell){
    //make adjustments to individual wizard properties
    wizard
  }
}
let lumos = {
  name: "lumos",
  damage: 25
};
let alohamora = {
  name: "Alohamora",
  damage: 30
};

let arrestoMomentum = {
  name: "Arresto Momentum",
  damage: 80
}


let harryPotter = new Wizard ("Harry Potter", 100, [lumos, alohamora]);

let hermionieGranger = new Wizard ("Hermionie Granger", 200, [arrestoMomentum, lumos] );

console.log(hermionieGranger.attack(harryPotter, arrestoMomentum));
