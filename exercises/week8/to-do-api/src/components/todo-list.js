import React from "react";
import ListItemCon from "../containers/todo-item-container.js";
class ToDoList extends React.Component{
 genItems() {
    return this.props.items.map((item, index) => {
      return <ListItemCon handleEdit ={this.props.handleEdit} handleRemove={this.props.handleRemove} key={item.title + index} index={index} item={item}/>
    })
  }    render(){
        return(
<div> {this.genItems()}</div>
        );
    }
}

export default ToDoList;