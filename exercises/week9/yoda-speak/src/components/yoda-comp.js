import React from "react"

class YodaComp extends React.Component{
    render(){
        return(
            <div>
<div><h1>Yoda, You Must Speak Like</h1>
<input onChange = {(event) => {
    this.props.handleChange(event)

}} value={this.props.input}
placeholder="enter in sentence"/>
<button onClick = {()=>{this.props.handleClick(this.props.input)
                        }}>Convert to Yoda Speak</button>
</div>
<div><h1>{this.props.words}</h1></div>
</div>
        );
    }
}

export default YodaComp;