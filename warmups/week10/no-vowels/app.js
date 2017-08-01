let noVowels = (str) => {
  str=str.toLowerCase();
  console.log(str)
    let myObject={};
    let consinents=[];
    let wordVowels = [];
   for(let i=0; i<str.length; i++){
       if( str[i] ==="a" ||str[i] ==="e" || str[i] ==="i" || str[i] ==="o" || str[i] ==="u"){
           wordVowels.push(str[i]);
       } else if(str[i]!= " "){
           consinents.push(str[i]);
       }
   } consinents=consinents.join("");
  console.log(consinents)
     wordVowels=wordVowels.join("");
     myObject.noVowels=consinents;
     myObject.vowels=wordVowels;
     return myObject;

}



module.exports = noVowels;