import React from "react";

class Form extends React.Component{
    render(){
        return(
<div>
    <h1>Input Badges</h1>
     <input placeholder="first name"/>
     <input placeholder="last name"/>
      <input placeholder="email"/>
       <input placeholder="phone"/>
        <input placeholder="birth place"/>
         <input placeholder="favorite food"/>
          <input placeholder="Tell us about yourself"/>
</div>
        );
    }
}

export default Form;