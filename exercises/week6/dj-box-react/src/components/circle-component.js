import React from "react";

class GutCircle extends React.Component{
    render(){
        return(
      
<div style={this.props.style} onClick={ ()=>{this.props.changer(); } } onMouseOver={()=>{this.props.myHover();}} className="circle"></div>


        );
    }
}

export default GutCircle;