import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OutPutCon from './containers/output-container.js';
import InputCon from './containers/input-container.js';
//this gets the thing that provides store to your app
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore} from "redux";
//this gets the reducer to handle state
import reducers from "./reducers";
//make the store

const store = createStore(reducers);
class App extends React.Component{
    render(){
        return(
<div>
    <InputCon></InputCon>
    <OutPutCon></OutPutCon>
    
</div>
        );
    }
}

//give it to the app through Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

