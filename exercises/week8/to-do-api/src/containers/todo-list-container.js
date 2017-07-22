import React from "react";
import ToDoList from '../components/todo-list.js';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
class ListCon extends React.Component{
    componentWillMount(){
        this.props.loadData();
    }

    render(){
        return(
            <div className="col-md-4 col-md-offset-1">
                <h1 >To-Do List</h1>
<ToDoList handleRemove ={this.props.removeData} handleEdit={this.props.editData} items={this.props.items}></ToDoList>
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

export default connect(mapStateToProps, mapDispatchersToProps)(ListCon);
