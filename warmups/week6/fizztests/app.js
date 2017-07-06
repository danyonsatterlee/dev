let fizzarr= [];
let fizzBuzz = (n) =>{
    for (let i=1; i <=20; i++){
        if(i % 3===0 && i % 5===0){
        fizzarr.push("fizzbuzz");

    } else if(i % 3===0){
        fizzarr.push("fizz");

    } else if( i%5===0){
        fizzarr.push("buzz");
    } else{
        fizzarr.push(i);
    }

    }
    
    return fizzarr;

};



module.exports = fizzBuzz;