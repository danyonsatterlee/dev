import React from "react";
import autoBind from 'react-autobind';
import CounterParts from "../components/counter-components.js";
class CounterContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            counter:10,
            style:{
color: "purple",
backgroundColor:"green"
            }

        };
     
    autoBind(this);
    };
   
    up() {
       this.setState({
              
              counter: this.state.counter+1, 
              style:{
                    ...this.state.style,
                  color: "red"
                 
                
              }
        });
    }
    down(){
     
        this.setState({
             
              counter: this.state.counter-1,
                 style:{
                       ...this.state.style,
                  color: "blue"
               
              }
        });
    }
            
    render(){
        return(
            <CounterParts style={this.state.style} handleUp={this.up} handleDown={this.down} counter={this.state.counter}></CounterParts>
            )
        
    }
  
}

export default CounterContainer;