import React from 'react';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>Counter</h1>
                <p>{this.props.counter}</p>
                <button onClick={()=>{this.props.handleAdd()}}>+</button>
                <button onClick={()=>{this.props.handleSub()}}>-</button>
            </div>
        )
    }
}

export default Counter;