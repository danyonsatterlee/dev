import React from "react";

class Add extends React.Component{
    render(){
        console.log(this.props.info)
        return(
<div>
    <h5>Title</h5>
    <input onChange={(event) => {
                this.props.handleChange("title",event);
            }} value={this.props.info.title} className="add input-lg" placeholder="title"/>
     <h5>Price</h5>
    <input onChange={(event) => {
                this.props.handleChange("price",event);
            }} value={this.props.info.price}className="add input-lg" placeholder="price"/>
     <h5>Description</h5>
    <input onChange={(event) => {
                this.props.handleChange("desc",event);
            }} value={this.props.info.desc}className="add input-lg" placeholder="description"/>
   
    <button className=" btn-primary btn-custom btn-lg">Add To Do List</button>

</div>
        );
    }
}

export default Add;