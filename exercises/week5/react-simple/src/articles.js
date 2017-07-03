import React from "react";
import ArticleList from "./articleList.js"
import FontAwesome from "react-fontawesome";

class Articles extends React.Component{

  alertText(subhead){
    alert(`this article is about ${subhead}`);
  }
  fav(title){
    alert(`you like this ${title}`)

  }

  render(){

    return(
<div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1">
        <div id="para">
        <ArticleList  myFav ={this.fav} clickButton={this.alertText} paragraphs={this.props.paragraphs}/>
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
