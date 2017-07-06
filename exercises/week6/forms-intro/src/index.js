import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormContainer from "./containers/form-container.js";
class App extends React.Component {
    render(){
        return(
            <div >
<FormContainer ></FormContainer>
</div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

