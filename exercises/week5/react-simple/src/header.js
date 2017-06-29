
import React from "react";

class Header extends React.Component{
  render(){
    return(
      <header>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div>
                <h1>Clean Blog</h1>
                <div id="white-line" className="center-block"></div>
                <h2>A Clean Blog Theme by Start Bootstrap</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
