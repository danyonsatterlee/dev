import React from "react";
import ToDoList from '../components/todo-list.js'
class ListCon extends React.Component{
    render(){
        return(
            <div className="col-md-4 col-md-offset-1">
                <h1 >To-Do List</h1>
<ToDoList list="list"></ToDoList>
</div>
        );
    }
}

export default ListCon;