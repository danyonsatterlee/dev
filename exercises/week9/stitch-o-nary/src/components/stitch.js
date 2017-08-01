import React from "react";

class Stitch extends React.Component {
    render() {
        console.log(this.props);
        return (

            <div className="pattern">
                <h1>{this.props.stitch.name}</h1>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.name}
                    onChange={(event) => {
                    this
                        .props
                        .handleChange("name", event);
                }}/>
                <p>{this.props.stitch.category}</p>
                <div className="text-center" style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}>

                                <select value={this.props.input.category} onChange={(event)=>{
                    this.props.handleChange("category",event)}}className="form-control center-block">
                                    <option >knit and purl</option>
                                    <option >cable</option>
                                    <option >lace</option>
                                    <option >rib</option>
                                </select>
                         
                        </div>
       

                <p>{this.props.stitch.notes}</p>

                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.notes}
                    onChange={(event) => {
                    this
                        .props
                        .handleChange("notes", event);
                }}/>

                <p>
                    {this.props.stitch.pattern.row1}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row1}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row1", event);
                }}/>
                <p>{this.props.stitch.pattern.row2}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row2}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row2", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row3}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row3}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row3", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row4}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row4}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row4", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row5}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row5}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row5", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row6}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row6}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row6", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row7}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row7}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row7", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row8}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row8}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row8", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row9}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row9}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row9", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row10}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row10}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row10", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row11}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row11}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row11", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row12}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row12}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row12", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row13}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row13}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row13", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row14}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row14}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row14", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row15}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row15}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row15", event);
                }}/>
                <p>
                    {this.props.stitch.pattern.row16}
                </p>
                <input
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}
                    value={this.props.input.row16}
                    onChange={(event) => {
                    this
                        .props
                        .handlePattern("row16", event);
                }}/>
                <button
                    onClick={() => {
                    this
                        .props
                        .handleEdit()
                }}>Edit</button>

                <button
                    onClick={() => {
                    this
                        .props
                        .handleSave(this.props.stitch.id, this.props.input);
                    this
                        .props
                        .handleEdit()
                }}
                    style={{
                    display: this.props.input.edit
                        ? "inherit"
                        : "none"
                }}>Save</button>
                <button
                    onClick={() => {
                    this
                        .props
                        .handleRemove(this.props.stitch.id)
                }}>Remove</button>

            </div>
        );
    }
}

export default Stitch;