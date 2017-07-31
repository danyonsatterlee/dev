import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import StitchList from "../components/stitch-list.js";
class StitchListCon extends React.Component {
       componentWillMount(){
        this.props.loadData();
    }
    render() {
       
        return (
            <div className="col-md-5">
                <StitchList stitch={this.props.stitch} handleSave={this.props.editData} handleRemove={this.props.deleteData}></StitchList>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
     return state;
 }

 // tell it how to turn actions into functions that can be called in react via props
 const mapDispatchToProps =(dispatch) => {
     return bindActionCreators(actionCreators,dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(StitchListCon);