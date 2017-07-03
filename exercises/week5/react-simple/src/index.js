import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from "./navbar.js";
import Header from "./header.js";
import Articles from "./articles.js"
import Footer from "./footer.js";

import './index.css';
class App extends React.Component{
  render(){

    return(

      <div>
        <Navbar
        //   links=[ "Home",
        // "About",
        // "Sample Post",
        // "Contact"]
        />
        <Header />
        <Articles paragraphs={[
            {
              title:"Man must explore, and this is exploration at its greatest",
              subhead:"Problems look mighty small from 150 miles up",
              date: "Posted by Start Bootstrap on September 24, 2014",
               url: "#"
            },
            {
              title: "I believe every human has a finite number of heartbeats. I do not intend to waste any of mine",
              subhead:" ",
              date: "Posted by Start Bootstrap on September 18, 2014",
               url: "#"
            },
            {
              title:"Science has not yet mastered prophecy",
              subhead:"We predict too much for the next year and yet far too little for the next ten.",
              date: "Posted by Start Bootstrap on August 24, 2014",
               url: "#"
            },
            {
              title:"Failure is not an option",
              subhead:"Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
              date: "Posted by Start Bootstrap on July 8, 2014",
               url: "#"
            }

          ]
        }/>
        <Footer />
      </div>

    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
