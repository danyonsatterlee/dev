import React from 'react';
import Beer from "./beer.js"
class BeerMap extends React.Component{
        genBeer(){ 
        return this.props.beer
        .sort((a,b)=>{
            return (b.likes)-(a.likes) 
    })
    .map((item,index)=>{
            return <Beer key ={index+ item.name} beer={item} handleDown={this.props.handleDown} handleUp={this.props.handleUp} ></Beer>
        })
    }
    render(){
        return(
           <div>
    {this.genBeer()}
    
</div>
        )
    }
}

export default BeerMap;