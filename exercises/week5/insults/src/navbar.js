import React from "react";

import {Navbar, NavItem, Nav} from "react-bootstrap";

class NavbarInsults extends React.Component{
    render(){
   
    return(
        <Navbar  collapseOnSelect className="nav-custom navbar">
          <Navbar.Header>
            <Navbar.Brand>
      Shakespearean Insults
      </Navbar.Brand>
           
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
              <Navbar.Brand>Wit from the 16th Century</Navbar.Brand>

             </Nav>
          </Navbar.Collapse>
        </Navbar>

    )
}
}

export default NavbarInsults;