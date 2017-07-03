import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiteContainer from "./containers/site-container.js";
class App extends React.Component{
    render() {
        return(
         <div>
             <SiteContainer/>
         </div>

        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

