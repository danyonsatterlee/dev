import React from "react";
import Badge from "./badge.js";
class BadgeList extends React.Component{
    genBadges(){
        return ( this.props.badges.map((badge, index) => {
        )
        })
    }
    render(){
        return(
<Badge/>
        );
    }
}

export default BadgeList;