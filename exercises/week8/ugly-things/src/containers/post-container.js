import React from "react";
import autoBind from 'react-autobind';
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import List from '../components/list-comp.js';


class PostCon extends React.Component{

 
    render(){
        return(
<div className="pink row"><List input={this.state}  update={this.props.update} uglyInfo={this.props.uglyInfo} remove={this.props.remove}></List></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostCon);


