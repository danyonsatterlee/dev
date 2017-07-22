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
       ...this.props.item,
       edit:false

    };
    autoBind(this);

}  

handleChange(key,event){
    let stateCopy={...this.state};
    stateCopy[key]=event.target.value;
    this.setState(stateCopy);
}
    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render(){
        
        return(
        <ToDo handleToggle={this.toggleEdit} info={this.state} handleRemove={this.props.handleRemove} handleChange={this.handleChange} handleEdit={this.props.handleEdit} item={this.props.item}></ToDo>
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