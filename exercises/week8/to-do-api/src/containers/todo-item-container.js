import React from "react";
import ToDo from '../components/todo.js'
import autoBind from 'react-autobind';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
class ListItemCon extends React.Component{
          constructor(props) { 
    super(props);
   
    this.state={
       ...this.props.item

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
        <ToDo info={this.state} handleChange={this.handleChange}handleEdit={this.props.handleEdit} item={this.props.item}></ToDo>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(ListItemCon) ;