let express = require('express');
let authRouter =express.Router();

let User = require("../models/user.js");

let jwt = require("jsonwebtoken");
let passport =require("passport");
let Strategy = require("passport-local");
let settings = require("../config/settings.js");

passport.use(new Strategy((username, password,done)=>{
    User.findOne({username}, (err, currentUser)=>{
        if(err){
            done(err, false);
        } else if(currentUser===null){
            done(null,false);
        } else{
            currentUser.auth(password, (isCorrect)=>{
                if(isCorrect){
                    done(null,true);
                } else{
                    done(null,false);
                }
            })
        }
    })
}));




authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session:false}), (req,res)=>{
  User.findOne({username:req.body.username},(err,data)=>{
      if(err){
          res.status(500).send({"message": "Error", err})
      } else if(data===null){
          res.status(404).send({"message": "No user found with this user name"})
      } else{
          let payload={
              username:data.username
          }
          res.status(201).send({
              "message": "Success, Auth Token issued",
              "token": jwt.sign(payload, settings.secret,{expiresIn:30*60})
          })
      }
  })
});
//post users
authRouter.post("/signup", (req, res)=>{
    let makeUser= new User(req.body);
    makeUser.save((err,result)=>{
        if(err){
            res.status(500).send({"message": "err in system", err});
        } else{
            res.status(201).send({"message": `User was created with user name of ${result.username}`});
        }
    });
});

module.exports=authRouter;