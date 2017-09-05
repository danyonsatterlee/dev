import React from 'react';
import ReactDOM from 'react-dom';
import CounterCon from './containers/counter-container.js';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <CounterCon></CounterCon>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

