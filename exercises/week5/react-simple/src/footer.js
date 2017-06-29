
import React from "react";

import FontAwesome from "react-fontawesome";

class Footer extends React.Component{
  render(){
    return(
      <div>
        <hr/>
        <div className="container">

          <div className="row">
            <div className="col-lg-12 ">
              <div className="awesome">
                <a href="#">
                  <span className="fa-stack fa-lg social-tag">
                    <FontAwesome
                      name= "circle"
                      stack='2x'



                      />
                    <FontAwesome
                      name="facebook"
                      stack='1x'
                      inverse
                      className="fontsA"
                      className="white"

                      />
                  </span>
                </a>
                <a href="#">
                  <span className="fa-stack fa-lg social-tag">

                    <FontAwesome
                      name= "circle"
                      stack='2x'


                      />
                    <FontAwesome
                      name= "twitter"
                      stack='1x'
                      inverse
                      className="text-center"
                      className="white"

                      />


                  </span>
                </a>
                <a href="#">
                  <span className="fa-stack fa-lg fontsA social-tag">
                    <FontAwesome
                      name= "circle"
                      stack='2x'


                      />
                    <FontAwesome
                      name= "github"
                      inverse
                      stack='1x'
                      className="white"
                      />
                  </span>
                </a>

                <div className="copyright">


                  <div className>
                    <p>Copyright
                      <FontAwesome
                        name= "copyright"
                        size='1x'
                        className="copyright-symbol"
                        />Your Website 2016</p>
                    </div>
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
