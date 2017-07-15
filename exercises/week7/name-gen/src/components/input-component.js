import React from 'react';

class InputNames extends React.Component {
    render() {
        return (
            <div>
                <input value={this.props.info.name1} placeholder="name one"></input>
                <input value={this.props.info.name2} placeholder="name two"></input>
                <input  value={this.props.info.name3} placeholder="name three"></input>
            
                <button onClick={ ()=> {
             this.props.handleClick(this.props.info);
             }

         }>Choose!</button>
            </div>
        );
    }
}

export default InputNames;