import React, {Component} from "react";

class Link extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <span className={ String(this.props.class) === "undefined"? "link" : "link "+this.props.class}> {this.props.children} </span>
        );
    }
}

export default Link;