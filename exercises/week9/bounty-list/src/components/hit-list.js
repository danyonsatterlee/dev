import React from "react";
import HitCon from "../containers/hit-container.js";
class HitList extends React.Component {
    genHits(){
        return this.props.hits.map((item, index) => {
      return <HitCon handleSave={this.props.handleSave} handleRemove={this.props.handleRemove} key={index + item.name} hit={item}/>
 })
  }
    render() {
        return (
            <div>
             {this.genHits()}
                </div>
                
           
        
        )
    }
}

export default HitList;