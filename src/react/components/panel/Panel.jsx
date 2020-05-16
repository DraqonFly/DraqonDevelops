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
            <div className={"panel "+this.props.className}> {this.props.children} 

            </div>
        );
    }
}

export default Panel;