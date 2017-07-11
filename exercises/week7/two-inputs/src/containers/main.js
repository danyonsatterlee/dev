import React from "react";
import autoBind from 'react-autobind';
import Inputs from '../components/inputs.js';

class Main extends React.Component {
    constructor() {
  super();
 this.state={
firstname:"",
lastname:"",
input:{
    firstname:"",
    lastname:""

    }
 };


  autoBind(this);
}
handleInput(key,event){
    let input={
            ...this.state.input,
        };
        input[key]=event.target.value;
    this.setState({
        ...this.state,
        input:input
       


    });

}
handleSubmit(){
    this.setState({
        ...this.state,
        firstname:this.state.input.firstname,
        lastname:this.state.input.lastname,
        input:{
            firstname:"",
            lastname:""
        }
    })
}
    render() {
        return (
            <div>
                <h1>Two Inputs</h1>
                <Inputs handleSubmit={this.handleSubmit} firstname={this.state.firstname} lastname={this.state.lastname} handleInput={this.handleInput} input={this.state.input}/>
                
            </div>
        );
    }
}

export default Main;