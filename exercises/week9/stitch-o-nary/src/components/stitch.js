import React from "react";

class Stitch extends React.Component {
    render() {
        return (

            <div className="pattern">
                <h1>{this.props.name}KnitTitle</h1>
                <p>{this.props.category}category</p>
                <p>{this.props.notes}Special Notes</p>
                <p>R1</p>

                {/*<p>R1<span>{this.props.pattern.row1}</span>
                </p>
                <p>R2<span>{this.props.pattern.row2}</span>
                </p>
                <p>R3<span>{this.props.pattern.row3}</span>
                </p>
                <p>R4<span>{this.props.pattern.row4}</span>
                </p>
                <p>R5<span>{this.props.pattern.row5}</span>
                </p>
                <p>R6<span>{this.props.pattern.row6}</span>
                </p>
                <p>R7<span>{this.props.pattern.row7}</span>
                </p>
                <p>R8<span>{this.props.pattern.row8}</span>
                </p>
                <p>R9<span>{this.props.pattern.row9}</span>
                </p>
                <p>R10<span>{this.props.pattern.row10}</span>
                </p>
                <p>R11<span>{this.props.pattern.row11}</span>
                </p>
                <p>R12<span>{this.props.pattern.row12}</span>
                </p>
                <p>R13<span>{this.props.pattern.row13}</span>
                </p>
                <p>R14<span>{this.props.pattern.row14}</span>
                </p>
                <p>R15<span>{this.props.pattern.row15}</span>
                </p>
                <p>R16<span>{this.props.pattern.row16}</span>
                </p>*/}

            </div>
        );
    }
}

export default Stitch;