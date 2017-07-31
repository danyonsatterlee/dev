import React from "react";

class Stitch extends React.Component {
    render() {
       console.log(this.props);
        return (

            <div className="pattern">
                <h1>{this.props.stitch.name}</h1>
                <p>{this.props.category}</p>
                <p>{this.props.notes}</p>
                <p>R1</p>

                {/*<p>R1<span>{this.props.stitch.pattern.row1}</span>
                </p>
                <p>R2<span>{this.props.stitch.pattern.row2}</span>
                </p>
                <p>R3<span>{this.props.stitch.pattern.row3}</span>
                </p>
                <p>R4<span>{this.props.stitch.pattern.row4}</span>
                </p>
                <p>R5<span>{this.props.stitch.pattern.row5}</span>
                </p>
                <p>R6<span>{this.props.stitch.pattern.row6}</span>
                </p>
                <p>R7<span>{this.props.stitch.pattern.row7}</span>
                </p>
                <p>R8<span>{this.props.stitch.pattern.row8}</span>
                </p>
                <p>R9<span>{this.props.stitch.pattern.row9}</span>
                </p>
                <p>R10<span>{this.props.stitch.pattern.row10}</span>
                </p>
                <p>R11<span>{this.props.stitch.pattern.row11}</span>
                </p>
                <p>R12<span>{this.props.stitch.pattern.row12}</span>
                </p>
                <p>R13<span>{this.props.stitch.pattern.row13}</span>
                </p>
                <p>R14<span>{this.props.stitch.pattern.row14}</span>
                </p>
                <p>R15<span>{this.props.stitch.pattern.row15}</span>
                </p>
                <p>R16<span>{this.props.stitch.pattern.row16}</span>
                </p>*/}

            </div>
        );
    }
}

export default Stitch;