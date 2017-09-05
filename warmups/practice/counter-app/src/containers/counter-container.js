import React from 'react';
import Counter from '../components/counter.js';

class CounterCon extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        };
        this.up=this.up.bind(this);
        this.down=this.down.bind(this);
    }

    up(){
        this.setState({
            counter: this.state.counter+1
        });
    }

    down(){
        this.setState({
            counter:this.state.counter-1
        });
    }
    render(){
        return(
            <Counter handleAdd={this.up} handleSub={this.down} counter={this.state.counter}></Counter>
        )
    }
}

export default CounterCon;