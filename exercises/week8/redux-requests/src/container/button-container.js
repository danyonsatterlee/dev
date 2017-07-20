import React from "react";
import autoBind from 'react-autobind';
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
 import Button from '../component/button.js'

class ButtonCon extends React.Component{
    //     constructor() {
    //     super();
        
    //     this.state = {
    //      color: "red"
    //     }
  

       
    // };
    render(){
        return(
          <Button handleClick={this.props.changeColor} color={this.props.color}></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCon);
