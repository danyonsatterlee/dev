import React from 'react';

class Add extends React.Component {
    render() {
        return (
            <div>
                <h3 className="add-beer">Can't find your beer?</h3>
                <a><h5  onClick={this.props.toggle} className="add-beer">Click Here to Add You Own</h5></a>
                <div style={{display: this.props.input.show ? "inherit" : "none"}}>
                    <input value ={this.props.input.name} onChange = {(event)=>{
                        this.props.handleChange("name", event)
                        console.log(this.props.input.name)
                    }} placeholder="add beer name here"/>
                    <button onClick={()=>{this.props.handleClick(this.props.input)}}>Add</button>
                    </div>
            </div>

        )
    }
}

export default Add;