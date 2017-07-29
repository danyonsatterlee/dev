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
                            <input placeholder="eg. garder stitch"/>

                        </div>
                        <div className="col-md-5">
                            <h2>Category</h2>
                            <input placeholder="eg. knit and purl"/>
                        </div>

                        <h2 className="text-center">Special Notes</h2>
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
                            <input placeholder="Row 1"/>
                            <h4>Row 2</h4>
                            <input placeholder="Row 2"/>
                            <h4>Row 3</h4>
                            <input placeholder="Row 3"/>
                            <h4>Row 4</h4>
                            <input placeholder="Row 4"/>
                            <h4>Row 5</h4>
                            <input placeholder="Row 5"/>
                            <h4>Row 6</h4>
                            <input placeholder="Row 6"/>
                            <h4>Row 7</h4>
                            <input placeholder="Row 7"/>
                            <h4>Row 8</h4>
                            <input placeholder="Row 8"/>
                        </div>
                        <div className="col-md-5">
                            <h4>Row 9</h4>
                            <input placeholder="Row 9"/>
                            <h4>Row 10</h4>
                            <input placeholder="Row 10"/>
                            <h4>Row 11</h4>
                            <input placeholder="Row 11"/>
                            <h4>Row 12</h4>
                            <input placeholder="Row 12"/>
                            <h4>Row 13</h4>
                            <input placeholder="Row 13"/>
                            <h4>Row 14</h4>
                            <input placeholder="Row 14"/>
                            <h4>Row 15</h4>
                            <input placeholder="Row 15"/>
                            <h4>Row 16</h4>
                            <input placeholder="Row 16"/>
                        </div>
                        <button className="btn-success btn-md center-block space-it">Submit Pattern</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;