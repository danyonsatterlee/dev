import React from 'react';

import builder from './profile.png'



class Header extends React.Component{
  render(){
    return(

      <div className="container-fluid green">
        <div className="row">
          <div className="col-12-md col-12-lg center-block">
            <img className="center-block worker" src={builder} alt="worker"></img>
            </div>
            <div className="col-12-md col-12-lg">
              <h1 className="text-center">START BOOTSTRAP</h1>
            </div>
          </div>


          <div className="row text-center">



            <div className="col-sm-12">
              <div className="white-bar"></div>
              <i className="star text-center fa fa-star fa-3x" aria-hidden="true"></i>

              <div className="white-bar"> </div>
            </div>
          </div>

          <div className="row green space">

            <div className="col-12-md">
              <h2 className="text-center">Web Developer - Graphic Artist - User Experience Designer</h2>
            </div>
          </div>
        </div>

      );
    }
  }



  export default Header;
