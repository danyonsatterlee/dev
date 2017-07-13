import React from 'react';



class Form extends React.Component{
    render(){
        return(
            <div >
          
             <div className="row">
             <div className="col-md-4 text-center">
            <h3>top text</h3>
            <input onChange={(event) => {
                this.props.handleChange("toptext",event);
            }} value={this.props.info.toptext}></input>
            </div>
             <div className="col-md-4 text-center">
             <h3>Bottom text</h3>
            <input onChange={(event) => {
                this.props.handleChange("bottomtext",event);
            }} value={this.props.info.bottomtext}></input>
              </div>
             <div className="col-md-4 text-center">
             <h3>Image URL</h3>
            <input onChange={(event) => {
                this.props.handleChange("url",event);
            }} value={this.props.info.url}></input>
              </div>
</div>
 <div className="row">
     <div className="col-md-12 text-center">
         <button onClick={ ()=> {
             this.props.handleClick(this.props.info);
             }

         }
         className="btn btn-warning btn-lg btn-custom">Create</button>

     </div>
      </div>
</div>
        );
    }
}

export default Form;