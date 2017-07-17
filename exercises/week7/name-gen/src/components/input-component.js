import React from 'react';

class InputNames extends React.Component {
    render() {
        return (
            <div>
                <input  
                onChange={ (event) => {
                this.props.handleChange("name1",event)} }
                placeholder="name one"></input>
                <input 
                 onChange={ (event) => {
                this.props.handleChange("name2",event)} }
                 placeholder="name two"></input>
                <input  onChange={ (event) => {
                this.props.handleChange("name3",event)} }
                 placeholder="name three"></input>
            
                <button onClick={ ()=> {
            this.props.handleClick([this.props.info.name1, this.props.info.name2,this.props.info.name3])
             }

         }>Choose!</button>
            </div>
        );
    }
}

export default InputNames;