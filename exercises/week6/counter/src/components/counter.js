import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}
                </h1>
                <button onClick= { () =>{ this.props.handleUp(); } }>Up</button>
                <button onClick= { () =>{ this.props.handleDown(); } }>Down</button>
                <button onClick= { () =>{ this.props.handleReset(100); } }>Reset</button>
            </div>
        );
    }
}

export default Counter;
