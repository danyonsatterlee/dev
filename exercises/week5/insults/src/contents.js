import React from 'react';
import Portraits from "./portraits.js";

class Contents extends React.Component{

    insultText(insult){
    alert(`${insult}`);
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <Portraits clickButton={this.insultText} pic={this.props.pic}/>
        

            </div>
          </div>
         
    )
  }
}


export default Contents;
