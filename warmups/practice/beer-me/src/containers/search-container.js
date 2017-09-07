import React from 'react';
import * as actionCreators from "../actions/";
import {connect} from "react-redux";
import Search from '../components/search.js';

class SearchContainer extends React.Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <Search ></Search>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(SearchContainer);