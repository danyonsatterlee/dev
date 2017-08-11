import React from 'react';
import ReactDOM from 'react-dom';
import HomeCon from "./containers/home-container.js"
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <HomeCon></HomeCon>
           

            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
