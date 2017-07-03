import React from "react";
import Site from "../components/site.js";
class SiteContainer extends React.Component{
    render(){
        return(
<div>
   <Site image="images/japan.jpg" name="japan" />
</div>
        );
    }
}

export default SiteContainer;