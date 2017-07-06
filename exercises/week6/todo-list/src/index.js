import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ToDoContainer from "./containers/todo-container.js";
class App extends React.Component{
    render(){
        return(
            <div className="container">
                 <div className="row">
                      <div className="col-md-6 col-md-offset-3 text-center">

<h1 >To-Do List</h1>
                <ToDoContainer></ToDoContainer>
            </div>
            </div>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
