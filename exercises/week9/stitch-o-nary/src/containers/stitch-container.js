import React from "react";

import Stitch from "../components/stitch.js";
class StitchCon extends React.Component{
    render(){
       
        return(
<Stitch stitch={this.props.stitch}  handleSave={this.props.handleSave} handleRemove={this.props.handleRemove}></Stitch>
        );
    }
}

export default StitchCon;