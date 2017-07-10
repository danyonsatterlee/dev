import React from "react";

import autoBind from "react-autobind";
import Red from "../components/red-button.js";
import Blue from "../components/blue-button.js";
import Reset from "../components/reset.js";
class Main extends React.Component{
        constructor(){
        super();
        this.state ={
            redcounter:100,
            bluecounter:100

        };
         autoBind(this);
    };
    bluePress() {
       this.setState({
              
            bluecounter: this.state.bluecounter+1, 
            redcounter: this.state.redcounter-1,
              
        });
    }
     redPress() {
       this.setState({
              
            bluecounter: this.state.bluecounter-1, 
            redcounter: this.state.redcounter+1,
              
        });
    }
        handleReset() {
       this.setState({
              
            bluecounter: 100, 
            redcounter: 100,
              
        });
    }
    render(){
        return(
<div className="main">
  
    <Red counter={this.state.redcounter} redPress ={this.redPress}/>
    <Blue counter={this.state.bluecounter} bluePress ={this.bluePress}/>
    <Reset handleReset={this.handleReset}/>
</div>
        );
    }
}

export default Main;