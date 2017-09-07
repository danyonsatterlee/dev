import React from 'react';
import * as actionCreators from "../actions/";
import {connect} from "react-redux";
import autoBind from "react-autobind";
import Add from '../components/add.js';

class AddContainer extends React.Component {
        constructor(){
        super();
        this.state={
            name: "",
            likes: 1,
            show:false
            
            
        }
         autoBind(this);
    };
   
    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    } 
             toggle(){
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <Add toggle={this.toggle}  handleClick={this.props.addData} handleChange={this.handleChange} input={this.state}></Add>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(AddContainer);