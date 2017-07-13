import React from 'react';

import Form from "../components/form-components.js";
import autoBind from 'react-autobind';
//get the thing to connect react to redux
import { connect } from "react-redux";
//get bind action creators to bind 'this to the store
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";


class FormCon extends React.Component{
    constructor() { 
    super();
     autoBind(this);
    this.state={
        toptext:"",
        bottomtext:"",
        url:  ""

    };

}

handleChange(key,event){
    let stateCopy={...this.state};
    stateCopy[key]=event.target.value;
    this.setState(stateCopy);
}
    render(){

        return(
<Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state}></Form>
        );
    }
}
// tell redux how to connect the state to component via props
const mapStateToProps = (state)=>{
     return state;
 }

 // tell it how to turn actions into functions that can be called in react via props
 const mapDispatchToProps =(dispatch) => {
     return bindActionCreators(actionCreators,dispatch);
 }
export default connect(mapStateToProps, mapDispatchToProps)(FormCon);