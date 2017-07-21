import React from "react";
import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import Add from '../components/add-inputs.js'
class AddCon extends React.Component{
        constructor() { 
    super();
   
    this.state={
        title:"",
       price:"",
       description:  ""

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
<Add handleAdd={this.props.addData} handleChange={this.handleChange} info={this.state}></Add>
</div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(AddCon);