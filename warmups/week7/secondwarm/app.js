


let middleChar = (str) =>{
    let middle = str.length/2;
   if(str.length %2 != 0){
       return false
   }else if(str===0){
       return NaN;
   
   } else{
       return str[middle-1]+str[middle];
   }

};





module.exports=middleChar;