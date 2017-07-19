// let k =[];
// let i= [];
// let result =[];

// let subs = (str) =>{
//   for(let i=0; i<str.length; i++){
//     for(let k=i+1; k<str.length; k++){
//       let sliceIt= str.slice(i,k);
//       result.push(sliceIt);
//     }
//   }console.log(result);
// }
        
        
        
// console.log(subs("somewordthatimadeup"));

let checkIfUnique =(str) =>{
  let chars={};
//return true if string contains no duplicates
for(let i=0; i<str.length;i++){
  if(!chars[str[i]]){
    chars[str[i]]=str[i];
  } else{
    return false;
  }
}return true;
//return false if string has duplicates
}


let k =[];
let i= [];
let result =[];

let subs = (str) =>{
  let longestSofar="";
  for(let i=0; i<str.length; i++){
    for(let k=i+1; k<str.length+1; k++){
      let sliceIt= str.slice(i,k);
      if(sliceIt.length>longestSofar.length && checkIfUnique(sliceIt)){
      longestSofar=sliceIt;
    }
  }
  }
   return longestSofar

  } 
   



        
        
        
console.log(subs("somewordthatimadeup"));



 