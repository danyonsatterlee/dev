import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div
                   
                    className="color-me"
                    style={{
                    backgroundColor: `${this.props.color}`
                }}>
                    <button onClick = {()=>{this.props.handleClick()
                        }}className="custon-btn">Color Time</button>
                </div>
            </div>
        );
    }
}

export default Button;