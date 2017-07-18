import React from "react";

class Ugly extends React.Component {
    render() {
        return (
            <div>
              
                    <div className="col-md-4 text-center">
                       
                        <h2 className="ugly-text">{this.props.item.title}</h2>
                      <input value={this.props.inputs[this.props.index].title} onChange={(event) => {
                this.props.handleChange("title",event, this.props.index)}} />
                        <div
                        
                            className="image center-block"
                            style={{
                            backgroundImage: `url('${this.props.item.url}')`
                        }}>
                         <input value={this.props.inputs[this.props.index].desc} onChange={(event) => {
                this.props.handleChange("title",event, this.props.index)}}/>
                           <button className="btn-danger pull-left" onClick = {()=>{this.props.remove(this.props.index)
                        }}>X</button>
                        </div>
                        <h2 className="ugly-text">{this.props.item.description}</h2>
                         <input value={this.props.inputs[this.props.index].url} onChange={(event) => {
                this.props.handleChange("title",event, this.props.index)}}/>
<button onClick={()=>{this.props.update(this.props.index,this.props.item)}} className="btn-success">Save Edit</button>
                    </div>
                </div>
         
        );
    }
}

export default Ugly;
