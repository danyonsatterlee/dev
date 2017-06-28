import React from "react";
//every javascript component that you want from bootstrap you put it in the {DropdownButton, Menu Item}
import {} from "react-bootstrap";
class Navbar extends React.Component{
  render(){
    console.log(this.props.links);
    let links = this.props.links.map((item)=>{
      return(
        // <li key ={text}><a href="">
        //   {text}
        // </a></li>
        <li key={item.text}>
          <a href="{item.url}">
            {item.text}
          </a>
        </li>
      );

    });

  // };
  return(

    <nav className="navbar navbar-light bg-faded">
      <h1 className="navbar-brand mb-0">Navbar</h1>
      {links}
    </nav>


  );
}
}

export default Navbar;
