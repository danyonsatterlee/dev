import React from "react";



class Inputs extends React.Component {
    render() {
        return (
            <div>

                <input onChange = {
                    (event)=>{
                    this.props.handleInput("firstname", event);
                    }
                } value={this.props.input.firstname} placeholder="first name"/>
                <input onChange = {
                    (event)=>{
                    this.props.handleInput("lastname", event);
                    }
                }
                value={this.props.input.lastname} placeholder="last name"/>
               <button onClick={
                   ()=>{
                       this.props.handleSubmit();
                   }
               }
               >Submit</button>
                <h2>{this.props.firstname}</h2>
                <h2>{this.props.lastname}</h2>
            </div>
        );
    }
}

export default Inputs;