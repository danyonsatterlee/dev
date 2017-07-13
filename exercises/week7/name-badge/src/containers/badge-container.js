import React from 'react';
import BadgeList from "./components/badge-list.js";
import Form from "./components/form.js";
import autoBind from 'react-autobind';

class BadgeContainer extends React.Component {
    constructor(){
        super();
this.state={
    firstname:"",
    lastname:"",
    email:"",
    birthplace:"",
    yourself:"",
    badges=[{
        

    }]
}
        autoBind(this);
    }

    render() {
        return (
           <Form></Form>
           <BadgeList></BadgeList>
        );
    }
}

export default BadgeContainer;