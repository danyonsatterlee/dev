import React from "react";

class Hit extends React.Component {
    render() {
        return (
            <div>
                <div className="hit-div">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.location}</p>
                    <p>{this.props.price}</p>
                    <p>{this.props.deadoralive}</p>
                </div>
                
           
            </div>
        )
    }
}

export default Hit;