

let matching = (str) => {
  let resultArray=[];
  str.toLowerCase();
  let strArray = str.split(' ');
  for(var i=0; i< strArray.length; i++){
    for(var x=0; x<strArray.length; x++){
      if(strArray[x]===strArray[i] && x!=i){
        if(resultArray.includes(strArray[i])===false){
          resultArray.push(strArray[i]);
        }
      }
    }
  }return resultArray;


};


module.exports = matching;
