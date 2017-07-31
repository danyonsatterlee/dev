import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";
import Form from "../components/form.js";

class FormCon extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            category: "",
            notes: "",
            pattern: [
                {
                    row1: "",
                    row2: "",
                    row3: "",
                    row4: "",
                    row5: "",
                    row6: "",
                    row7: "",
                    row8: "",
                    row9: "",
                    row10: "",
                    row11: "",
                    row12: "",
                    row13: "",
                    row14: "",
                    row15: "",
                    row16: ""
                }
            ]

        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value})
    }
    handlePattern(key, event) {
        this.setState({
            pattern: {
                ...this.state.pattern,
                [key]: event.target.value
            }
        })
    }
    render() {
        return (
            <Form
                input={this.state}
                handleChange={this.handleChange}
                handleClick={this.props.addData}
                handlePattern={this.handlePattern}></Form>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

// tell it how to turn actions into functions that can be called in react via
// props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCon);