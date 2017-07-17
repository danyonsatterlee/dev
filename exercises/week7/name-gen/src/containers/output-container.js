import React from 'react';

import Result from '../components/output-component.js';
//get the thing to connect react to redux
import { connect } from "react-redux";
//get bind action creators to bind 'this to the store
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
class OutputCon extends React.Component{
    render(){
        return(
<div>
    <Result result={this.props.result}></Result>
</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(OutputCon);