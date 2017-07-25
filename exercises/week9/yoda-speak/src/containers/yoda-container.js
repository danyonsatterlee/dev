import React from "react"
import autoBind from 'react-autobind';
import YodaComp from "../components/yoda-comp.js";

import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
class YodaCon extends React.Component{
        constructor() {
        super();
        autoBind(this);
        this.state = {
            phrase: ""
        
  

        };
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            phrase: event.target.value
        });

    }
    render(){
        return(
<YodaComp handleClick={this.props.convertText} input={this.state.phrase} words={this.props.words} handleChange={this.handleChange} ></YodaComp>
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

export default connect(mapStateToProps, mapDispatchToProps)(YodaCon);