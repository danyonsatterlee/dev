import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-6">
                    <h1 className="text-center">Add a Stitch</h1>
                    <div className="form-group">
                        <div className="col-md-5 col-md-offset-2">

                            <h2>Name</h2>
                            <input value={this.props.input.name} onChange={(event)=>{
                    this.props.handleChange("name",event)}} placeholder="eg. garder stitch"/>

                        </div>
                        <div className="col-md-5">
                            <h2>Special Notes</h2>
                            <input value={this.props.input.notes} onChange={(event)=>{
                    this.props.handleChange("notes",event)}}  placeholder="eg. knit and purl"/>
                        </div>

                        <h2 className="text-center">Category</h2>
                        <div className="col-md-9 col-md-offset-2">
                            <div className="text-center">

                                <select className="form-control center-block">
                                    <option>knit and purl</option>
                                    <option>cable</option>
                                    <option>lace</option>
                                    <option>rib</option>
                                </select>
                            </div>
                        </div>
                        <h2 className="text-center space-it">Pattern</h2>
                        <div className="col-md-5 col-md-offset-2">
                            <h4>Row 1</h4>
                            <input value={this.props.input.pattern.row1} onChange={(event)=>{
                    this.props.handleChange("row1",event)}} placeholder="Row 1"/>
                            <h4>Row 2</h4>
                            <input value={this.props.input.pattern.row2} onChange={(event)=>{
                    this.props.handleChange("row2",event)}} placeholder="Row 2"/>
                            <h4>Row 3</h4>
                            <input value={this.props.input.pattern.row3} onChange={(event)=>{
                    this.props.handleChange("row3",event)}}placeholder="Row 3"/>
                            <h4>Row 4</h4>
                            <input value={this.props.input.pattern.row4} onChange={(event)=>{
                    this.props.handleChange("row4",event)}} placeholder="Row 4"/>
                            <h4>Row 5</h4>
                            <input value={this.props.input.pattern.row5} onChange={(event)=>{
                    this.props.handleChange("row5",event)}} placeholder="Row 5"/>
                            <h4>Row 6</h4>
                            <input value={this.props.input.pattern.row6} onChange={(event)=>{
                    this.props.handleChange("row6",event)}} placeholder="Row 6"/>
                            <h4>Row 7</h4>
                            <input value={this.props.input.pattern.row7} onChange={(event)=>{
                    this.props.handleChange("row7",event)}} placeholder="Row 7"/>
                            <h4>Row 8</h4>
                            <input value={this.props.input.pattern.row8} onChange={(event)=>{
                    this.props.handleChange("row8",event)}} placeholder="Row 8"/>
                        </div>
                        <div className="col-md-5">
                            <h4>Row 9</h4>
                            <input value={this.props.input.pattern.row9} onChange={(event)=>{
                    this.props.handleChange("row9",event)}} placeholder="Row 9"/>
                            <h4>Row 10</h4>
                            <input value={this.props.input.pattern.row10} onChange={(event)=>{
                    this.props.handleChange("row10",event)}} placeholder="Row 10"/>
                            <h4>Row 11</h4>
                            <input value={this.props.input.pattern.row11} onChange={(event)=>{
                    this.props.handleChange("row11",event)}} placeholder="Row 11"/>
                            <h4>Row 12</h4>
                            <input value={this.props.input.pattern.row12} onChange={(event)=>{
                    this.props.handleChange("row12",event)}} placeholder="Row 12"/>
                            <h4>Row 13</h4>
                            <input value={this.props.input.pattern.row13} onChange={(event)=>{
                    this.props.handleChange("row13",event)}} placeholder="Row 13"/>
                            <h4>Row 14</h4>
                            <input value={this.props.input.pattern.row14} onChange={(event)=>{
                    this.props.handleChange("row14",event)}} placeholder="Row 14"/>
                            <h4>Row 15</h4>
                            <input value={this.props.input.pattern.row1} onChange={(event)=>{
                    this.props.handleChange("row15",event)}} placeholder="Row 15"/>
                            <h4>Row 16</h4>
                            <input value={this.props.input.pattern.row16} onChange={(event)=>{
                    this.props.handleChange("row16",event)}} placeholder="Row 16"/>
                        </div>
                        <button className="btn-success btn-md center-block space-it">Submit Pattern</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;