import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//this gets the reducer to handle state
import reducers from "./reducers";

import FormCon from "./containers/form-container.js";
import HitListCon from "./containers/hit-list-container.js";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component{
    render(){
        return(
<div>
    <div className="wrapper">
    <FormCon></FormCon>
     </div>
    <div className="wrapper">
    <HitListCon></HitListCon>
     </div>
    </div>
        );
           
        
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

