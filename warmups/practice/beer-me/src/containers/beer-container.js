import React from 'react';
import * as actionCreators from "../actions/";
import {connect} from "react-redux";
import BeerMap from '../components/beer-map.js'
class BeerContainer extends React.Component {
    componentWillMount() {

        this
            .props
            .loadData();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-11 col-md-offset-1 text-center">
                    <BeerMap handleDown={this.props.downVote} handleUp={this.props.upVote} beer={this.props.beer} ></BeerMap>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(BeerContainer);