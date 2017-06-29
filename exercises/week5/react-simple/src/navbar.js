


import React from "react";

class Navbar extends React.Component{
  render(){
    return(
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 className="uptop">Start Bootstrap</h3>
          </div>
          <ul className="nav navbar-nav navbar-right">

            <li>Home</li>
            <li>About</li>
            <li>Sample Post</li>
            <li>Contact</li>

          </ul>
        </div>
      </nav>


    );
  }
}

export default Navbar;
