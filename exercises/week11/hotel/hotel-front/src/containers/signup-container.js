import React from "react";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import autoBind from "react-autobind";

import Signup from "../components/signup.js";

class SignupCon extends React.Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
        autoBind(this);
    }
handleChange(key,event){
    this.setState({
        [key]:event.target.value
    });
}
    render() {
        return (
       <Signup input={this.state} handleChange={this.handleChange} handleSubmit={this.props.signup}></Signup>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(SignupCon);