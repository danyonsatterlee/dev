import React from "react";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import Events from "../components/events.js";
import Guests from "../components/guests.js";

class HomeCon extends React.Component {
    componentWillMount(){
        this.props.loadEvents()
   
    }
    componentDidUpdate(){
        if(this.props.guests.length === 0 && this.props.token){
this.props.loadGuests(this.props.token)
        }

    }
    render() {
        return (
            <div>
                <Events events={this.props.events}></Events>
                <Guests token={this.props.token} guests={this.props.guests}></Guests>
          
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(HomeCon);