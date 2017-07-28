import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
          
                <input value={this.props.input.name} onChange={(event)=>{
                    this.props.handleChange("name",event)}} placeholder="name"/>
                <input  value={this.props.input.location} onChange={(event)=>{
                    this.props.handleChange("location",event)}} placeholder="location"/>
                <input  value={this.props.input.price} onChange={(event)=>{
                    this.props.handleChange("price",event)}} placeholder="price"/>
                <input  value={this.props.input.wanted} onChange={(event)=>{
                    this.props.handleChange("wanted",event)}} placeholder="wanted"/>
                <button onClick={()=>{this.props.handleClick(this.props.input)}}>submit</button>
            </div>
        )
    }
}

export default Form;