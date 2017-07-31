import React from "react";
import StitchCon from "../containers/stitch-container.js";
class StitchList extends React.Component {
    genStitch() {

        return this
            .props
            .stitch
            .map((item, index) => {
              
                return <StitchCon handleSave={this.props.handleSave} stitch={item} handleRemove={this.props.handleRemove}></StitchCon>
            })
    }
    render() {
        return (
            <div>
                
                {this.genStitch()}
            </div>
        );
    }
}

export default StitchList;