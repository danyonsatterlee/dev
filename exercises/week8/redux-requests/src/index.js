

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//this gets the reducer to handle state
import reducers from "./reducers";
//make the store
import './index.css';
import ButtonCon from './container/button-container.js';
const store = createStore(reducers, applyMiddleware(thunk));
class App extends React.Component{
    render(){
        return(
          <ButtonCon></ButtonCon>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));