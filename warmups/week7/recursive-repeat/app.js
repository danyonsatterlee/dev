let repeat = function(str,count){
    
    if(count===1){
        return str;
    }else if(count<=0){
        throw "count is not valid";
     }else{
      return  str + repeat(str,count-1);
     
    }
};





module.exports=repeat;


