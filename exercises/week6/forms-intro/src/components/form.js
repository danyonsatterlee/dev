import React from "react";

class Form extends React.Component{
    componentWillMount() {
        this.nameListItem = this.props.names.map((item,index) => {
            return(
            <li key={item+index}>
                {item}
            </li>
            );
        });

    }
    render(){
        
return(
<div >
    <h1>{this.props.brand}</h1>
    <input></input>
    <button onClick={ ()=>{
        this.props.submitHandler()
    }}>Submit</button>
    <ul key="this.name">
        {this.nameListItem}
    </ul>
    
</div>
        );
    }
}

export default Form;