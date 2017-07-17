import React from "react";

class Ugly extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="ugly-text">{this.props.item.title}</h2>
                        <div
                            className="image center-block"
                            style={{
                            backgroundImage: `url('${this.props.item.url}')`
                        }}></div>
                        <h2 className="ugly-text">{this.props.item.description}</h2>

                    </div>
                </div>
            </div>
        );
    }
}

export default Ugly;
