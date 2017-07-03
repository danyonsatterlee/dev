import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavbarChacha from "./nav.js";
import Header from "./header.js";




class App extends React.Component{
  render() {

    let myLinks = [
          {
            name: "Portfolio",
            link: "#"
          }, {
            name: "About",
            link: "#"
          }, {
            name: "Contact",
            link: "#"
          }
        ];

  return (
    <div className="App">
      <NavbarChacha navLinks={myLinks}/>
      <Header></Header>

    </div>
  );
}
}


ReactDOM.render(<App />, document.getElementById('root'));
