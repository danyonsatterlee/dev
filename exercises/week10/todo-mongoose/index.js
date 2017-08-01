let mongoose = require("mongoose");
var Schema = mongoose.Schema;
//27017 is the default database monogdb runs on
mongoose.connect("mongodb://localhost:27017/todos");
let todoSchema = new Schema({
    title:{
        type: String,
        required:true

    },
    description: String,
    dateDue:{
        type: String,
        date:Date.now
    },
    price: Number
});
//monoose.model("collection name", schema)
let Todo = mongoose.model("todolist", todoSchema);

//tomorrow's date
// let tomorrow= new Date();
// tomorrow.setDate(tomorrow.getDate()+1);

//create
// let newTodo = new Todo({
// title:"Connect mongoose to database",
// description: "listen to Jacob",

// });
// save the todo to the mongodb database
// newTodo.save((err,data)=>{
//     if(err){
//         console.log("err");
//     } else {
//         console.log("Item was saved to database");
//         console.log(data);
//     }

// });
// this is read all data the object and a callbackfunction
// Todo.find({},(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Found the data");
//         console.log(data);
//     }
// });

//read one data
// Todo.findOne({_id:"5980bab6c9aa2442ac0df322"},(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Found the data");
//         console.log(data);
//     }
// });

// Todo.findByIdAndRemove("5980bab6c9aa2442ac0df322", (err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Found the data");
//         console.log(data);
//     }
// });

let newData={
    title:"again222333",
    description:"updated yo222333"
}
Todo.findByIdAndUpdate("5980b5e1b1865d41b369dac0", newData, {new:true}, (err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log("update successful");
        console.log(data);
    }
});

Todo.find({},(err,data)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Found the data");
        console.log(data);
    }
});