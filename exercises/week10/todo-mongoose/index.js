//should be in both my modules and index
let mongoose = require("mongoose");
const express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");


let  toDoRouter = require("./routes/todo-route.js");
const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//use our routes 
app.use("/todo",toDoRouter)

app.listen(port, ()=>{
    console.log(`listening to ${port}`)
});

//27017 is the default database monogdb runs on. needs to be in our index.js
mongoose.connect("mongodb://localhost:27017/todos");