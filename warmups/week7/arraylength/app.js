

let combStr = (arr) => {
    let largest=0;
   for(let i=0; i<arr.length; i++){
       if (arr[i].length>largest){
        largest = arr[i].length;
       }
   } 

let first =arr.indexOf(largest)+arr.indexOf(largest+1)+arr.indexOf(largest+2);

let second = arr[arr.indexOf(largest)]+arr[arr.indexOf(largest+1)]+arr[arr.indexOf(largest-1)];
let third = arr.indexOf(largest)+arr.indexOf(largest-1)+arr.indexOf(largest-2);
let newArr=[first,third,second];
let max= Math.max(...newArr);

   if(max ===second){
       return [arr[largest],arr[largest-1],arr[largest+1]];

   } else if(max===first){
       return [arr[largest],arr[largest+1],arr[largest+2]];

   } else if (max ===third){
       return [arr[largest],arr[largest-1],arr[largest-2]];
   }
 

};





module.exports=combStr;