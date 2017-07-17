import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import List from '../components/list-comp.js';
class ListCon extends React.Component{
    render(){
        return(
<div className="pink row"><List uglyInfo={this.props.uglyInfo}></List></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCon);