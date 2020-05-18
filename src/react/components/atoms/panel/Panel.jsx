import React, {Component} from "react";

class Panel extends Component
{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className={String(this.props.class) === "undefined" ? "panel" : "panel "+this.props.class}> {this.props.children} 

            </div>
        );
    }
}

export default Panel;