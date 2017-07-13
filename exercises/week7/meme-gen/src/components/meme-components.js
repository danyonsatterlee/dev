import React from 'react';


class Meme extends React.Component{
    render(){
        return(
<div>
          
             <div className="row">
             <div className="col-md-12 text-center">
                 <div className="image center-block"style={{backgroundImage: `url('${this.props.url}')`}} >
                 <h2 className="top-text">{this.props.toptext}</h2>
                     <h2 className="bottom-text">{this.props.bottomtext}</h2>
                 </div>
            
              </div>
</div>
</div>
        );
    }
}

export default Meme;