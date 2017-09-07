import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Header from './containers/header.js';
import BeerContainer from './containers/beer-container.js';
import SearchContainer from './containers/search-container.js';
import AddContainer from './containers/add-container.js';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <Header></Header>
                <SearchContainer></SearchContainer>
                <BeerContainer></BeerContainer>
                <AddContainer></AddContainer>
            </div>
        );
    }
}

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root'));

