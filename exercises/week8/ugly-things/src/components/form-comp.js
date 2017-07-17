import React from "react";

class Form extends React.Component {
    

    render() {
        return (
            <div>
                <div className="row text-center formit">
                    <div className="col-md-4 col-sm-12">
                        <h2>Give It a Name</h2>
                        <input onChange={(event) => {
                this.props.handleChange("title",event);
            }} value={this.props.getValue("title")} placeholder="Title"/>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <h2>What?</h2>
                        <input onChange={(event) => {
                this.props.handleChange("url",event);
            }} value={this.props.getValue("url")} placeholder="Image URL"/>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <h2>Why?</h2>
                        <input onChange={(event) => {
                this.props.handleChange("description",event);
            }} value={this.props.getValue("description")} placeholder="Why is it Ugly"/>
                    </div>
                </div>

                < div className="row">
                    <div className="col-md-12 text-center orange">
                        <button onClick={()=>{
                            console.log(this.props.info);
                            this.props.handleSubmit(this.props.info)}} className="ugly-button text-center">Add to Ugly Book</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Form;