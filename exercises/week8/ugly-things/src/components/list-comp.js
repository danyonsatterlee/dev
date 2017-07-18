import React from "react";

import Ugly from "./ugly-comp.js";
class List extends React.Component{
    getPic(){
        return this.props.uglyInfo.map((item, index)=>{
            return <Ugly handleChange={this.props.handleChange} inputs={this.props.inputs} update={this.props.update} remove={this.props.remove} item={item} index={index} key={item + index}></Ugly>
        })
    }
    render(){
        return(

    <div>
        {this.getPic()}
    </div>

        );
    }
}

export default List;