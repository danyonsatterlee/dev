
import React from "react";

import FontAwesome from "react-fontawesome";

class Footer extends React.Component{
  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="awesome">
                <FontAwesome
                  name= "facebook-official"
                  size='3x'
                  />
                <FontAwesome
                  name= "twitter"
                  size='3x'
                  />
                <FontAwesome
                  name= "github"
                  size='3x'
                  />
                <div className="copyright">
                  <p>Copyright Your Website 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
