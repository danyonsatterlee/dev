import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Hit from "../components/hit.js";

class HitCon extends React.Component{
    render(){
        return(
<Hit hit={this.props.hit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HitCon);