import React from "react";

class GutStuff extends React.Component{
    render(){
        return(

<div style={this.props.style} onClick={ ()=>{this.props.changer(); } } onMouseOver={()=>{this.props.myHover(); }} className="boxer"></div>


        );
    }
}

export default GutStuff;