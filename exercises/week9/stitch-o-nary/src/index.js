import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import StitchListCon from "./containers/stitch-list-container.js"
import FormCon from "./containers/form-container.js"
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

ReactDOM.render(
    <App/>, document.getElementById('root'));
