import React from "react";

class ArticleList extends React.Component{
  render(){
    let para =  this.props.paragraphs.map((item)=>{
      return(
        <div  key = {item.title}>
          <a href="{item.url}">
            <h2 className="blog-title">{item.title}</h2>
            <h4 className="sub-title">{item.subhead}</h4>

          </a>
          <p className="blog-date">{item.date}</p>
          <hr/>
        </div>

      );

    });
    console.log(para);
    return (
    <div>
      {para}
    </div>
   );
  }
}

export default ArticleList;
