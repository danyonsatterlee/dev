import React from "react";
import ToDoBox from "./list-div.js"
class ToDoFeatures extends React.Component{
    render(){
        return(
<div className="text-center">
    <input></input>
    <button className="btn-danger btn-md btn-custom">add</button>
  <ToDoBox></ToDoBox>
    
    
</div>
        );
    }
}

export default ToDoFeatures;