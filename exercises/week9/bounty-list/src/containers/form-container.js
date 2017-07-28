import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Form from "../components/form.js";
import autoBind from "react-autobind";

class FormCon extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            price:"",
            location:"",
            wanted:""

        }; autoBind(this);
    }

    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }
    render(){
        return(
<Form input={this.state} handleChange={this.handleChange} handleClick={this.props.addData}/>
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }

 // tell it how to turn actions into functions that can be called in react via props
 const mapDispatchToProps =(dispatch) => {
     return bindActionCreators(actionCreators,dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(FormCon);