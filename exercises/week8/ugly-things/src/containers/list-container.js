import React from "react";
import autoBind from 'react-autobind';
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import List from '../components/list-comp.js';
class ListCon extends React.Component{
     constructor() {
        super();
     
        this.state = {
        editPic:[]

    };
       autoBind(this);
    }
        handleChange(key, event, index) {
        let stateCopy =[...this.state.editPic];
    
        stateCopy[index][key] = event.target.value;
        this.setState({
            
            editPic:stateCopy
        });

    }
 
    render(){
        return(
<div className="pink row"><List handleChange={this.handleChange} inputs={this.state.editPic} update={this.props.update} uglyInfo={this.props.uglyInfo} remove={this.props.remove}></List></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCon);


    //     handleChange(key, event, index) {
    //     let stateCopy = {
    //         ...this.state,
    //         editPic:[...this.state.editPic]
    //     };
    //     stateCopy.editPic[index][key] = event.target.value;
    //     this.setState({
            
    //         stateCopy
    //     });

    // }