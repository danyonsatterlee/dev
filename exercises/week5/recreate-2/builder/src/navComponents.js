import React from 'react';

import {Navbar, NavItem, Nav} from "react-bootstrap";



class NavComponents extends React.Component{
  render(){

    let myNav =  this.props.navLinks.map((item)=>{
      return(
        <NavItem eventKey={1} href={item.url}>{item.name}</NavItem>

      );
    });
    return(
      <Nav pullRight>
      {myNav}
</Nav>
    );
  }
}


export default NavComponents;
