import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//this gets the reducer to handle state
import reducers from "./reducers";
import StitchListCon from "./containers/stitch-list-container.js";
import FormCon from "./containers/form-container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Stitch-o-Nary</h1>
                <div className="row">
                <FormCon></FormCon>
                <StitchListCon></StitchListCon>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

