
let primeTime = (num)=> {
    let count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count ++;
        }
    }
   if(count>2){
       return false;
   } else{
       return "prime";
   }
};






module.exports = primeTime;



