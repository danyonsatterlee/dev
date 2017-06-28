import React from "react";
import ReactDOM from "react-dom";



import "./index.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar brand="Catbabies" links={[
            {
              text:"dogbabies",
              url:"www.google.com"
            },
            {
              text: "blog",
              url: "www.facebook.com"
            },
            {
              text: "about",
              url:"www.twitter.com"
            },
            {
              text: "the war",
              url: "www.instagram.com"
            }
          ]}
          />


          <Content>
            <h1>Hello I don't know why you say good bye</h1>

            <p>I say hello</p>
            </Content>
            <Footer />
          </div>
        );

      }
    }





    ReactDOM.render(<App />, document.querySelector("#root"));
