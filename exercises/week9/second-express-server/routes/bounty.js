let express = require ("express");
let bountyRouter = express.Router();

let Bounty = require("../models/bounty.js")

bountyRouter.use((req,rex,next)=>{
    for(let key in req.query){
        if(typeof req.query[key]==="string"){
            req.query[key] = req.query[key].toLowerCase();
        }
    }
    next();
});


bountyRouter.get("/", (req,res)=>{
    Bounty.find(req.query, (err,data)=>{
        if(err){
            res.status(500).send({"message":" Error within server", err});
        
        } else{
            res.status(200).send({"message": "Success here is your data", data});
        }
    });
});

bountyRouter.post("/",(req,res)=>{
    let newBounty = new Bounty(req.body);
    newBounty.save((err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within the server", err});
        } else{
            res.status(201).send({ "message": "Item was created", data});
        }
    });
});

bountyRouter.put("/:id", (req, res)=>{
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within server", err});

        } else if(data===null){
            res.status(404).send({"message": "Not Found"});
        } else{
            res.status(200).send({"message": "Success you made an update!",data})
        }
    });
});

bountyRouter.get("/:id", (req,res)=>{
    Bounty.findOne({"_id": req.params.id}, (err,data)=>{
        if(err){
            res.status(500).send({"message": "Error within server", err});

        } else if(data===null){
            res.status(404).send({"message": "Not Found"});
        } else{
            res.status(200).send({"message": "Success, here is your data",data});
        }
    });
});
 

 bountyRouter.delete("/:id", (req, res)=>{
     Bounty.findByIdAndRemove(req.params.id, (err, data)=>{
             if(err){
            res.status(500).send({"message": "Error within server", err});

        } else if(data===null){
            res.status(404).send({"message": "Not Found"});
        } else{
            res.status(200).send({"message": "Success, your item was deleted"});
        }
     })
 })

module.exports = bountyRouter;




// bountyRouter.get("/", (req, res) => {
//     res
//         .status(200)
//         .send({"message": "Success here is your data", data: bountyArr})
// });

// bountyRouter.get("/:id", (req, res) => {
//     console.log(req.params);
//     // loop through the data array to find the object which has an ._id that matches
//     // req.params.id and return that object
//     for (let i = 0; i < bountyArr.length; i++) {
//         if (bountyArr[i].id === req.params.id) {
//             res.send(bountyArr[i])
//         }
//     }
//    return res.status(404).send({message: "ERROR NOT FOUND"})

// });

// bountyRouter.delete("/:id", (req, res) => {
//     // loop through data find the matching objects splice it out of the array send
//     // back confirmation message it was deleted
//     for (let i = 0; i < bountyArr.length; i++) {
//         if (bountyArr[i].id === req.params.id) {
//             bountyArr.splice(i, 1);
//             res.send({message: "DELETE SUCESSFUL"})

//         }
//     }
//     return res.status(404).send({message: "ERROR NOT FOUND"})
// });

// bountyRouter.put("/:id",(req,res)=>{
//     //the edit update
//     //loop through data
//     //find matchign item
//     //replacing the old item with new
//     //handle error if not FOUND
//     for(let i=0; i<bountyArr.length; i++){
//         if(bountyArr[i].id === req.params.id){
//             for(let key in req.body){
//                 console.log(key);
//                 if(bountyArr[i].hasOwnProperty(key)){
//                     //check if current item has a property name of key value
//                     bountyArr[i][key]=req.body[key];
//                 }
//             };
//            return res.status(200).send({message: "item updated"})
//         }

//     }return res.status(404).send({message: "ERROR NOT FOUND"})
// })

// bountyRouter.post("/", (req, res) => {
//     let newBounty = req.body;
//     newBounty.id = uuid();
//     bountyArr.push(newBounty);
//     res
//         .status(201)
//         .send({"message": "Success data was posted"})
// });

