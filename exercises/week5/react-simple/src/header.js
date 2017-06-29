
import React from "react";

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="container-fluid">
          <div className="row">

              <div className="holder">
                <h1>Clean Blog</h1>
                <div id="white-line" className="center-block"></div>
                <h2>A Clean Blog Theme by Start Bootstrap</h2>
              </div>
            </div>
          </div>
  
      </header>
    );
  }
}

export default Header;
