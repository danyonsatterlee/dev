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
updateItemValue(index,event){
    let items = [...this.state.toDo];
    items[index].value = event.target.value;
   console.log(event.target.value);
    this.setState({
        ...this.state,
        items: items
    })

};

handleSubmit(){
    this.setState({
        ...this.state,
        toDo:[...this.state.toDo, {name:this.state.toDoValue, value:""}],
         toDoValue: ""
    });
}

// handleRemove(index){
//     let deleteToDo = [...this.state.toDo];
//     deleteToDo.splice(index,1)
//     this.setState({
//         ...this.state,
//         toDo : deleteToDo
//     });
// }

save(index){
    let items = [...this.state.toDo];
    console.log(items);
    items[index].name=items[index].value;
    this.setState({
        ...this.state,
        items: items
    })

}

    render(){
        // handleRemove ={this.handleRemove}
        return(
<ToDoFeatures handleSave ={this.save} handleUpdateItemValue={this.updateItemValue} toDo ={this.state.toDo} toDoValue={this.state.toDoValue}  handleInput ={this.handleInput} handleSubmit ={this.handleSubmit} ></ToDoFeatures>
        );
    }
}

export default ToDoContainer;