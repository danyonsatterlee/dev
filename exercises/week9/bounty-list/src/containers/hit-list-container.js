import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import HitList from "../components/hit-list.js";

class HitListCon extends React.Component{
    componentWillMount(){
        this.props.loadData();
    }
    render(){
        return(
<HitList hits={this.props.hits}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HitListCon);