import React from "react";

class ToDo extends React.Component{
    render(){
        return(
<div>
    <li><h3 className="list">Title</h3>
    <h3 className="list">Price</h3>
    <h5 className="list">description</h5><button className="btn-warning btn-custom">edit</button><button className="btn-success btn-custom">complete</button></li>
</div>
        );
    }
}

export default ToDo;