import React from "react";

class Hit extends React.Component {
    render() {
        return (
            <div>
                <div className="hit-div">
                    <h1>{this.props.hit.name}</h1>
                    <p>{this.props.hit.location}</p>
                    <p>{this.props.hit.price}</p>
                    <p>{this.props.hit.wanted}</p>
                </div>
                
           
            </div>
        )
    }
}

export default Hit;