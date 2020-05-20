import React, { Component } from "react";

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: this.props.class
        }

    }

    onClick = () => {
        console.log("RECOGNIZED CLICK");
        this.props.onClick();



    }


    render() {
        return(
        <div onClick={this.onClick} className={String(this.props.class) === "undefined" ? "menuItem" : "menuItem "+this.props.class} > 
            { this.props.children }
        </div>
        );
    }
}

export default MenuItem;