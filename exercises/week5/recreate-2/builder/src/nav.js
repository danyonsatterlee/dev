import React from 'react';


import {Navbar, NavItem, Nav} from "react-bootstrap";
import NavComponents from "./navComponents.js"



class NavbarChacha extends React.Component{
  render(){

    return(

        <Navbar  collapseOnSelect className="nav-custom navbar">
          <Navbar.Header>
            <Navbar.Brand>
      Start Bootstrap
      </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>


              <NavComponents navLinks={this.props.navLinks}/>


          </Navbar.Collapse>
        </Navbar>





    );
  }
}
export default NavbarChacha;
