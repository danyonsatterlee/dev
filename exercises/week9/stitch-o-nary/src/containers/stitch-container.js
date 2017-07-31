import React from "react";
import autoBind from "react-autobind";
import Stitch from "../components/stitch.js";
class StitchCon extends React.Component{
        constructor(props){
        super(props);
        this.state={
   ...this.props.stitch,
   edit:false
        },
         autoBind(this);
    }

    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }

    handlePattern(key, event) {
        this.setState({
            pattern: {
                ...this.state.pattern,
                [key]: event.target.value
            }
        })
    }

     toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render(){
       
        return(
<Stitch input={this.state} handleEdit={this.toggleEdit} stitch={this.props.stitch} handlePattern={this.handlePattern} handleChange={this.handleChange} handleSave={this.props.handleSave} handleRemove={this.props.handleRemove}></Stitch>
        );
    }
}

export default StitchCon;