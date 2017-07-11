import React from "react";
// onClick ={ () => {this.props.handleRemove(index)}}
class ToDoFeatures extends React.Component{
    genToDo(){
        return this.props.toDo.map((item,index) => {
            return(
<li  key={item.name+index} value={item.toDoValue}>
    {item.name}

   <input onChange={(event) => {
                     this.props.handleUpdateItemValue(index, event)}}/>


    <button onClick={ () =>{this.props.handleSave(index)}}>Save</button>
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