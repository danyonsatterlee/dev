import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//this gets the thing that provides store to your app
import {Provider} from "react-redux";
//this gets the thing that makes the store
import {createStore} from "redux";
//this gets the reducer to handle state
import reducers from "./reducers";
//make the store
import ListCon from './containers/list-container.js';
import FormCon from './containers/form-container.js';
const store = createStore(reducers);
class App extends React.Component{
    render(){
        return(
<div className="container-fluid">
    <div className="row">
      
    <h1 className="text=center title-page" >Burn Book of Ugly Things</h1>
    </div>
      <FormCon/>
    <ListCon/>
  
</div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


