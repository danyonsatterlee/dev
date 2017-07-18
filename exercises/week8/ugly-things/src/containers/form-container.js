import React from "react";
import Form from "../components/form-comp";
import autoBind from 'react-autobind';
//get the thing to connect react to redux
import { connect } from "react-redux";
//get bind action creators to bind 'this to the store
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
class FormCon extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            currentPic: {
            title: "",
            description: "",
            url: ""
        },
  

        };
    }

    handleChange(key, event) {
        let stateCopy = {
            ...this.state.currentPic
        };
        stateCopy[key] = event.target.value;
        this.setState({
            ...this.state,
            currentPic: stateCopy
        });

    }

    getValue (key){
        return this.state[key];
    }
    click(){

    }
    render() {
        return (
            <div>
                <Form handleSubmit={this.props.submit} handleChange={this.handleChange} info={this.state.currentPic} getValue={this.getValue}></Form>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FormCon);