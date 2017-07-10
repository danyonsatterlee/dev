import React from "react";

class Blue extends React.Component{
    render(){
        return(
            <div>
            <div className="blue" onClick= { () =>{ this.props.bluePress(); } }></div>
<h1>{this.props.counter}
                </h1>
            </div>
        )
    }
}

export default Blue;