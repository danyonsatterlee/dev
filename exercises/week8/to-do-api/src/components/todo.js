import React from "react";

class ToDo extends React.Component {
    render() {
        return (
            <div>
                <li>
                    <h3 className="list">{this.props.item.title}</h3>

                     <input style={{display:this.props.info.edit ? "inherit" : "none"}} onChange={(event) => {
                this.props.handleChange("title",event);
                     }}value={this.props.info.title} placeholder="edit title"/>
             
              
                    <h3 className="list">{this.props.item.price}</h3>
                    <input style={{display:this.props.info.edit ? "inherit" : "none"}} onChange={(event) => {
                this.props.handleChange("price",event);
                     }}  value={this.props.info.price} placeholder="edit price" />

                    <h5 className="list">{this.props.item.description}</h5>
                    <input style={{display:this.props.info.edit ? "inherit" : "none"}} onChange={(event) => {
                this.props.handleChange("description",event);
                     }} value={this.props.info.description} placeholder="edit description"/>

                     
                    <button className="btn-custom btn-warning" onClick={() =>{this.props.handleToggle()}}>Edit</button>



                    <button onClick={() =>{this.props.handleEdit(this.props.item._id, this.props.info); this.props.handleToggle()}} style={{display:this.props.info.edit ? "inherit" : "none"}} className="btn-success btn-custom">save edit</button>
                    <button onClick= {()=>{ this.props.handleRemove(this.props.item._id);}} className="btn-danger btn-custom">complete</button>
                </li>
            </div>
        );
    }
}

export default ToDo;