import React from 'react';
import autoBind from 'react-autobind';
import InputNames from '../components/input-component.js';
//get the thing to connect react to redux
import { connect } from "react-redux";
//get bind action creators to bind 'this to the store
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class InputCon extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            name1: "",
            name2: "",
            name3: ""
         

        };

    }
    handleChange(key,event){
    let stateCopy={...this.state};
    stateCopy[key]=event.target.value;
    this.setState(stateCopy);
    console.log(event.target.value);
}
    render() {
        return (
            <div>
                <InputNames handleClick={this.props.pickName} handleChange={this.handleChange} info={this.state}></InputNames>
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
export default connect(mapStateToProps, mapDispatchToProps)(InputCon);
