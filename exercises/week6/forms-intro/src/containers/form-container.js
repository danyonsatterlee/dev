import React from "react";
import autoBind from "react-autobind"
import Form from "../components/form.js";
class FormContainer extends React.Component{
constructor(){
    super();
    this.state={
        names: ["Jordan","Mike","Mike"],
        nameValue: ""

        
    }
    autoBind(this);
}
handleInput(event){
    console.log(event.target.value);
    this.setState({
        
         ...this.state,
         nameValue: event.target.value

    });

}
submit(){
    this.setState({
        ...this.state,
        names:[...this.state.names, this.state.nameValue]
    });
    
}
handleRemove(index){
    let oldNames=[...this.state.names];
    oldNames.splice(index,1);
    this.setState({
        ...this.state,
        names: oldNames
    });


}
    render(){
        return(

      
    <Form handleRemove={this.handleRemove} brand="Help Stop This Important Issue" nameValue={this.state.nameValue} handleInput={this.handleInput} names={this.state.names} submitHandler={this.submit}></Form>

        );
    }
}

export default FormContainer;