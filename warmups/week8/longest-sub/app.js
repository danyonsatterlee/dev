let k =[];
let i= [];
let result =[];

let subs = (str) =>{
  for(let i=0; i<str.length; i++){
    for(let k=i+1; k<str.length; k++){
      let sliceIt= str.slice(i,k);
      result.push(sliceIt);
    }
  }console.log(result);
}
        
        
        
console.log(subs("somewordthatimadeup"));