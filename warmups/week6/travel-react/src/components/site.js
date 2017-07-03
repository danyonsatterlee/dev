import React from "react";


class Site extends React.Component{
    render(){
        return(
<div className="site-circle" style={{background:`url('${this.props.image}')`,
}}>
    <h3>{this.props.name}</h3>
   
</div>
        );
    }
}

export default Site;