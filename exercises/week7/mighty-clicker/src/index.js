import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/main.js';
class App extends React.Component{
    render(){
        return(
<div>
    <Main/>
</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

