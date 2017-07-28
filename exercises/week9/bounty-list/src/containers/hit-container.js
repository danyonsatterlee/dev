import React from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Hit from "../components/hit.js";

class HitCon extends React.Component{
    constructor(props){
        super(props);
        this.state={
   ...this.props.hit,
   edit:false
        },
         autoBind(this);
    }

    handleChange(key,event){
        this.setState({
            [key]:event.target.value
        })
    }

     toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render(){
        return(
<Hit input={this.state}  handleEdit={this.toggleEdit} handleSave={this.props.handleSave} handleChange={this.handleChange} hit={this.props.hit} handleRemove={this.props.handleRemove}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HitCon);