
import React from 'react';


class  Portraits extends React.Component{
  

render(){
    let onePortrait = this.props.pic.map((item)=>{
    return(
         
          <div className="col-lg-3 text-center">
              <div className="wrapper">
              <img className="sizeit img-responsive center-block" src={item.img} />
            </div>
            <button className="text-center" key={this.name} onClick={()=>{
                this.props.clickButton(item.insult)
              }}>
              Insult!</button>
              </div>
           
  
   
  

        );
     });
    return(
    <div>{onePortrait}</div>
    );
}
}




export default Portraits;