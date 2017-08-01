let express = require("express");
let todoRouter = express.Router();

//import model
let Todo = require("../models/todo.js");
//middle ware to putall queries to lowercase
todoRouter.use((req,rex,next)=>{
    for(let key in req.query){
        if(typeof req.query[key]==="string"){
            req.query[key]= req.query[key].toLowerCase()
        }
    }
    next();
});

todoRouter.get("/", (req, res) => {
  Todo.find(req.query, (err, data) => {
    if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else {
      res.status(200).send({"message": "Success here is your data", data});
    }
  });
});

todoRouter.post("/", (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save((err, data) => {
    if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else {
      res.status(201).send({"message": "Item was created", data});
    }
  });
});

todoRouter.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, data)=>{
if(err) {
      res.status(500).send({"message": "Error within server", err});
      } else if(data===null){
        res.status(404).send({"message": "Not Found"})
    
    } else {
        res.status(200).send({"message": "Success you you made an update!"});
    }
    });


});


// get by id
todoRouter.get("/:id", (req, res) => {
Todo.findOne({"_id": req.params.id}, (err,data)=>{
    console.log(data);
    if(err) {
      res.status(500).send({"message": "Error within server", err});
      } else if(data===null){
        res.status(404).send({"message": "Not Found"})
    
    } else {
      res.status(200).send({"message": "Success here is your data", data});
    }
    });
  });



todoRouter.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err,data)=>{
       if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else if(data===null){
        res.status(404).send({"message": "Not Found"})
    }else {
      res.status(200).send({"message": "Success here is your data", data});
  
        }
    })
});

module.exports = todoRouter;