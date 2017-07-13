import React from 'react';
import Meme from "../components/meme-components.js";

import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class MemeCon extends React.Component{
    render(){
        return(
<div>
    <Meme toptext={this.props.toptext} bottomtext={this.props.bottomtext} url={this.props.url}></Meme>
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

export default connect(mapStateToProps, mapDispatchToProps)(MemeCon);