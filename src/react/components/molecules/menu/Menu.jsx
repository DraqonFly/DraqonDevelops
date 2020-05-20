import React, { Component } from "react";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className={String(this.props.class) === "undefined"? "menu" : 
            (this.props.horizontal)? "menu "+ "horizontal " + this.props.class : "menu "+ "vertical " + this.props.class}> 
                {this.props.children} 
            </div>
        );
    }
}

export default Menu;