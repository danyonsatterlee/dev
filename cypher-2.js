let original = "hi";
let alphabet = "abcdefghijklmnopqrstubwxyz";
let crypt = 0;

let newString = "";

let ceasar=(str, alphabet, num) =>{

  for (let i = 0; i < str.length; i++) {
    for (let x = 0; x < alphabet.length; x++) {
      if (str[i] === alphabet[x]) {

        if (x + num >= 26) {
          let y = (x + num) % 26;
          let add2 = alphabet[y];
          newString += add2;
        } else {
        if (str[i]=== alphabet[x])
          let add = alphabet[x + num];
          newString += add;
        }
      }
    }
  }
  return newString;
};

console.log(ceasar(original, alphabet, 2));