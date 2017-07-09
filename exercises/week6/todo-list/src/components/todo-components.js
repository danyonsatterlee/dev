import React from "react";

class ToDoFeatures extends React.Component{
    genToDo(){
        return this.props.toDo.map((item,index) => {
            return(
<li onClick ={ () => {this.props.handleRemove(index)}} key={item+index}>
    {item}
</li>
            );

        });
    } 
    render(){
       
        return(
<div className="text-center">
    <input value ={this.props.toDoValue} onChange={this.props.handleInput}></input>
    
    <button className="btn-danger btn-md btn-custom" onClick={ ()=>{
        this.props.handleSubmit()}}>add</button>

    <div className="list text-center">
        <ul>
            {this.genToDo()}
            
        </ul>
    </div>
    
</div>
        );
    }
}

export default ToDoFeatures;