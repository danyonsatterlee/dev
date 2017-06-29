import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from "./navbar.js";
import Header from "./header.js";
import Footer from "./footer.js";

import './index.css';
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>

    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
