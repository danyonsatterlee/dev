import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavbarInsults from "./navbar.js";
import Contents from "./contents.js";

class App extends React.Component{
    
  
  render(){
      let portraits = [
          {
            name: "woman1",
            insult: "The rankest compound of villainous smell that ever offended nostril",
            img: "img/woman1.jpg"
          }, {
            name: "woman2",
            insult: "Thou art a boil, a plague sore",
          
            img: "img/woman2.jpg"
          }, {
            name: "man1",
            insult: "Villain, I have done thy mother",
            img: "img/man1.jpg"
          },  {
            name: "man2",
            insult: "Away, you three-inch fool!",
            img: "img/man2.jpg"
          }
        ];
   return(
     <div>
      <NavbarInsults/>
      <Contents pic={portraits}/>
      </div>
      );

  
  
  

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
