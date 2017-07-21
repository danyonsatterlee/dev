import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/";
import './index.css';

import AddCon from './containers/add-container.js';
import ListCon from './containers/todo-list-container.js';
import thunk from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thunk));
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <AddCon></AddCon>
                    <ListCon></ListCon>
                    
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));

