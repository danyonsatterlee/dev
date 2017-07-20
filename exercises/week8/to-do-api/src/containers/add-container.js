import React from "react";
import autoBind from 'react-autobind';
import Add from '../components/add-inputs.js'
class AddCon extends React.Component{
        constructor() { 
    super();
   
    this.state={
        title:"",
       price:"",
       desc:  ""

    };
    autoBind(this);

}  

handleChange(key,event){
    let stateCopy={...this.state};
    stateCopy[key]=event.target.value;
    this.setState(stateCopy);
}
    render(){
        return(
            <div className="col-md-4 col-md-offset-2  add-color" >
                <h1 className="text-center">Add to Your To-Do List</h1>
<Add handleChange={this.handleChange} info={this.state}></Add>
</div>
        );
    }
}

export default AddCon;