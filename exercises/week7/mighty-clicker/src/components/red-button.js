import React from "react";

class Red extends React.Component{
    render(){
        return(
            <div><h1>{this.props.counter}
                </h1>
            <div className="red" onClick= { () =>{ this.props.redPress(); } }></div>
            </div>
        )
    }
}

export default Red;