import React from "react";

class Ugly extends React.Component {
    render() {
        return (
            <div>
              
                    <div className="col-md-4 text-center">
                       
                        <h2 className="ugly-text">{this.props.item.title}</h2>
                      <input />
                        <div
                        
                            className="image center-block"
                            style={{
                            backgroundImage: `url('${this.props.item.url}')`
                        }}>
                         <input />
                           <button className="btn-danger pull-left" onClick = {()=>{this.props.remove(this.props.index)
                        }}>X</button>
                        </div>
                        <h2 className="ugly-text">{this.props.item.description}</h2>
                         <input />
<button className="btn-success">Save Edit</button>
                    </div>
                </div>
         
        );
    }
}

export default Ugly;
