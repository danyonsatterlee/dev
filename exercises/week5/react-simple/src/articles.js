import React from "react";
import ArticleList from "./articleList.js"
import FontAwesome from "react-fontawesome";

class Articles extends React.Component{
  render(){
    // let para =  this.props.paragraphs.map((item)=>{
    //   return(
    //     <div  key = {item.title}>
    //       <a href="{item.url}">
    //         <h2 className="blog-title">{item.title}</h2>
    //         <h4 className="sub-title">{item.subhead}</h4>
    //
    //       </a>
    //       <p className="blog-date">{item.date}</p>
    //       <hr/>
    //     </div>
    //
    //   );
    // });
    return(
<div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1">
        <div id="para">
        <ArticleList paragraphs={this.props.paragraphs}/>
        </div>
        <a href="#">
          <div className="old-posts">Older Posts
          <FontAwesome
            name= "long-arrow-right"
            size='1x'
            className="arrow"
            />

          </div>

          </a>
        <div>

        </div>
      </div>
    </div>
  </div>

</div>
    );
  }
}

export default Articles;
