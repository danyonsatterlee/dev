import React from "react";

class Hit extends React.Component {
    render() {
        return (
            <div>
                <div className="hit-div">
                    <h1>{this.props.hit.name}</h1>
                    <input value={this.props.input.name} 
                    onChange={(event)=>{
                        this.props.handleChange("name",event);
                    }}/>
                    <p>{this.props.hit.location} </p>
                     <input value={this.props.input.location} 
                    onChange={(event)=>{
                        this.props.handleChange("location",event);
                    }}/>
                    <p>{this.props.hit.price} </p>
                     <input value={this.props.input.price} 
                    onChange={(event)=>{
                        this.props.handleChange("price",event);
                    }}/>
                    <p>{this.props.hit.wanted} </p>
                     <input value={this.props.input.wanted} 
                    onChange={(event)=>{
                        this.props.handleChange("wanted",event);
                    }}/>
                     <button onClick={()=>{this.props.handleSave(this.props.hit.id, this.props.input)}}>Save</button>
                    <button onClick={()=>{this.props.handleRemove(this.props.hit.id)}}>Remove</button>
                </div>
                
           
            </div>
        )
    }
}

export default Hit;