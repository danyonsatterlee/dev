import React from "react";
import Counter from "../components/counter-components.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions";
class CounterContainer extends React.Component{
    render(){
        return(
<Counter handleAdd={this.props.makeAddAction} handleSub={this.props.makeSubAction}  counter={this.props.counter}></Counter>
        );
    }
}
const mapStateToProps = (state) =>{
    return state;

}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);