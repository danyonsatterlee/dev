let mongoose = require("mongoose");
let readlineSync= require("readline-sync");
let User = require("./models/user.js");
mongoose.connect("mongodb://localhost:27017/userexample");

let username = readlineSync.question('May I have your name? ');
let password = readlineSync.question('Password: ', {hideEchoBack:true});

// let createUser = new User({
//     username,
//     password
// });


// createUser.save((err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("New user was saved", data);
//     }
// })


User.findOne({username},(err, currentUser)=>{
    if(err){
        console.log(err);
    } else if(currentUser===null){
        consoe.log("user not found");

    } else{
        currentUser.auth(password, (isCorrect)=>{
            if(isCorrect){
                console.log("success user name and password are correct");
            } else{
                console.log("invalid password or username");
            }

        });

    }
})
