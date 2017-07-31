let pigLatin = (str) => {
    let newWord=[]
    for(let i=0; i<str.length; i++){
        if(str[i]=== "a"||str[i]=== "e"||str[i]=== "i"||str[i]=== "o"||str[i]=== "u"){
            newWord.push(str[i]);  
        } else{
           newWord.push(str[i]+"o"+str[i])
        }
    } return newWord.join("");


}

module.exports = pigLatin;