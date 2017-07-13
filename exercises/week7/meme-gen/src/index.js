import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemeCon from "./containers/meme-container.js";
import FormCon from "./containers/form-container.js";
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
      <div className="row">
                 <div className="col-md-12">

            <h1 className="text-center">Build a Meme</h1>
            </div>
            </div>
 
   <FormCon></FormCon>
     <MemeCon></MemeCon>
</div>
        );
    }
}
//give it to the app through Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

