import React from "react";
import autoBind from "react-autobind"
import ToDoFeatures from "../components/todo-components.js";

class ToDoContainer extends React.Component{
    constructor(){
    super();
    this.state={
        toDo:[],
   toDoValue: ""

        
    }
    autoBind(this);
}
handleInput(event){
   
   this.setState({
        
         ...this.state,
         toDoValue: event.target.value,
         


    });

}

handleSubmit(){
    this.setState({
        ...this.state,
        toDo:[...this.state.toDo, this.state.toDoValue]
    });
}

handleRemove(index){
    let deleteToDo = [...this.state.toDo];
    deleteToDo.splice(index,1)
    this.setState({
        ...this.state,
        toDo : deleteToDo
    });
}

    render(){
        return(
<ToDoFeatures toDo ={this.state.toDo} toDoValue={this.state.toDoValue}  handleInput ={this.handleInput} handleSubmit ={this.handleSubmit} handleRemove ={this.handleRemove}></ToDoFeatures>
        );
    }
}

export default ToDoContainer;