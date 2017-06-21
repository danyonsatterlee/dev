var counter = 0;
console.log("i'm waiting");


var yaya =setInterval(function(){
  console.log("done");
  counter++
  if (counter >= 10){
  clearInterval(yaya);
  console.log("stop");
  }
}, 3000);

var students =["Mandy", "Ginger", "sally"];

//array.forEach(function(currentValue, index, arr), thisValue)
students.forEach(function(item){
                 console.log(item)
                 });

var nums = [1,2,3,4,5,10,13,-5,7];

function checkEven(nums){
  if (nums % 2===0){
    return nums;
  }
}


var myFunction = function(){
  console.log(nums.filter(checkEven));
};

myFunction();
