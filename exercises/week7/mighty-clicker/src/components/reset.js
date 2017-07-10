import React from "react";

class Reset extends React.Component{
    render(){
        return(
            <div>
           <button onClick={ () =>{ this.props.handleReset(); } }>RESET</button>
            </div>
        )
    }
}

export default Reset;