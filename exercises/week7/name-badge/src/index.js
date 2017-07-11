import React from 'react';
import ReactDOM from 'react-dom';
import BadgeContainer from './containers/badge-container.js';
import Header from './containers/header.js';
import Footer from './containers/footer.js';
import './index.css';

class App extends React.Component{
    render(){
        return(
<div>
    <Header/>
    <BadgeContainer/>
    <Footer/>

</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

