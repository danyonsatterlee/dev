import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Form from "../components/form.js";

class FormCon extends React.Component{
    render(){
        return(
<Form/>
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