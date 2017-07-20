import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddCon from './containers/add-container.js';
import ListCon from './containers/todo-list-container.js';

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

ReactDOM.render(
    <App/>, document.getElementById('root'));
