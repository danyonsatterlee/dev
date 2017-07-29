import React from "react";
import Form from "../components/form.js";
import autoBind from "react-autobind";
class FormCon extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            category: "",
            notes: "",
            pattern: [{
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
            }]

        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({[key]: event.target.value})
    }
    render() {
        return (
            <Form input={this.state} handleChange={this.handleChange}></Form>
        );
    }
}

export default FormCon;