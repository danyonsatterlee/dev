import React from 'react';
import ReactDOM from 'react-dom';
import HomeCon from "./containers/home-container.js"
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import './index.css';
import LoginCon from "./containers/login-container.js"
import SignupCon from "./containers/signup-container.js"
let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <HomeCon></HomeCon>
                <LoginCon></LoginCon>
                <SignupCon></SignupCon>

            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'));
