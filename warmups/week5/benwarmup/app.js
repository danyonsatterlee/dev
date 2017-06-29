
let table = () =>{
  let mainArray=[];
  let k=1;
  let n=1;
  for(let i=0; i<10; i++){
    mainArray.push([]);
    for(let x=0; x<10; x++){

      mainArray[i].push(k*n);
      n++

    } if(n>10){
      n=1;
      k++;
    }

  }
        console.log(mainArray);
  return mainArray;
}


table();


module.exports =table;
