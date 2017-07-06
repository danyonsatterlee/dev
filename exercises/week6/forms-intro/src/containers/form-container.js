import React from "react";
import Form from "../components/form.js";
class FormContainer extends React.Component{
constructor(){
    super();
    this.state={
        names: ["Jordan","Mike","Mike"]

        
    }
}
submit(){
    alert("Clicked");
}
    render(){
        return(

    <Form brand="My App" names={this.state.names} submitHandler={this.submit}></Form>
 
        );
    }
}

export default FormContainer;