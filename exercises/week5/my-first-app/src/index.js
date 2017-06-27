import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import NavBar from "./navbar.js";
class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <h1> Hello World </h1>
        <p>Heeey It's me!!! </p>
        <div id="blue"> </div>


      </div>
    ) ;
  }
}

//<App /> is the same as <App></App>
ReactDOM.render(<App />, document.querySelector("#root"));
