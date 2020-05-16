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
            <p className="paragraph"> {this.props.children} </p>
        );
    }
}

export default Paragraph;