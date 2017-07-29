import React from "react";
import StitchCon from "../containers/stitch-container.js";
class StitchList extends React.Component {
    // genStith() {
    //     return this
    //         .props
    //         .hits
    //         .map((item, index) => {
    //             return <StitchCon></StitchCon>
    //         })
    // }
    render() {
        return (
            <div>
                <StitchCon></StitchCon>
                {/*{this.genStitch()}*/}
            </div>
        );
    }
}

export default StitchList;