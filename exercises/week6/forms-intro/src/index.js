import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormContainer from "./containers/form-container.js";
class App extends React.Component {
    render() {
        return (

        
               
                 <div className=" container">
                     <div className="row">
                         <div className= "col-xs-offset-4 col-xs-4 col-md-offset-4 col-md-4">
                   
                        <FormContainer></FormContainer>
             
            </div>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));
