import React, {Component} from "react";

class Paragraph extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <p className={String(this.props.class) === "undefined" ? "paragraph" : "paragraph "+this.props.class}> {this.props.children} </p>
        );
    }
}

export default Paragraph;