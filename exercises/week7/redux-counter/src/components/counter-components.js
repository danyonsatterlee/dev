import React from "react";

class Counter extends React.Component{
    render(){
        return(
<div>
    <h1>{this.props.counter}</h1>
    <button onClick={this.props.handleAdd}>UP</button>
    <button onClick={this.props.handleSub}>Down</button>
</div>
        );
    }
}

export default Counter;