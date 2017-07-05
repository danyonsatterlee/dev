// includes non-digits exceptfor periods doesn't include 4 different numbers not
// within range 0-255 not within range of 7-15 characters

let address = (ip) => {
let nums =[0,1,2,3,4,5,6,7,8,9];
let isNumeric =(value) => {
    return !isNaN(value);
}

    let splitter = ip.split(".");
    console.log(splitter);
   
    for (var i = 0; i < splitter.length; i++) {
      
        if (splitter[i] > 255 || splitter[i] < 0) {
            throw "invalid ip address";
            //  console.log(false);
       
        }  else if
       (isNumeric(splitter[i]) ===false) {
          throw "invalid ip address";
       }
    } if (splitter.length != 4) {
        throw "invalid ip address";
        //    console.log(false);
    }else{
        return true;
    
} 
    


};

module.exports = address;


