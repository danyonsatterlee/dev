let add = {
};

let addWord = (word, definition) => {
  word=word.toLowerCase();
  if(add.hasOwnProperty(word)===false){
    add[word]=definition;
  }
};

// let blueberry = new addWord(blueberry, "a blue berry");

let lookUpWord = (word) => {
  return add[word];
};



module.exports = {
  addWord,
  lookUpWord
}
