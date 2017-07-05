import React from "react";
import autoBind from 'react-autobind';
import GutStuff from "../components/box-components.js";
import GutCircle from "../components/circle-component.js";

import ReactAudioPlayer from "react-audio-player";

class BoxContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            boxer:{
                backgroundColor:"purple",
                

            },
            circle:{
                backgroundColor:"blue"
            }

        };
 autoBind(this);
    }
    componentDidMount(){
        window.addEventListener("scroll", this.toSwitch);
        // let audioPlayer = document.getElementById("sounder")
        

       

    }

    clickStuff(){
        this.setState({
            boxer:{
                 ...this.state.boxer,
                backgroundColor:"lawngreen"
            },
            circle:{
                  ...this.state.circle,
                backgroundColor:"yellow"
            }
        });
    }

        hoverStuff(){
        this.setState({
            boxer:{
                  ...this.state.boxer,
               backgroundColor: "maroon"
            },
            circle:{
                ...this.state.circle,
                backgroundColor:"goldenrod"
            }
        });
    }
    toSwitch(){
        this.setState({
              boxer:{
                  ...this.state.boxer,
               borderRadius: "100%"
            },
            circle:{
                ...this.state.circle,
                borderRadius: "0%"
            }

        })
    }
    render(){
        return(
<div className="wrapper">
<ReactAudioPlayer id="sounder" src="/sounds/mysound.mp3" autoPlay />
    <GutStuff style={this.state.boxer} changer ={this.clickStuff} myHover ={this.hoverStuff} ></GutStuff>
    <GutCircle style={this.state.circle} changer ={this.clickStuff} myHover ={this.hoverStuff}></GutCircle>
</div>
        );
    }
}

export default BoxContainer;