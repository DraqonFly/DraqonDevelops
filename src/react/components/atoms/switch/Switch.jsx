import React, { Component } from "react";

class Switch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        }
    }

    onClick = () => {
        this.setState({isToggled: !this.state.isToggled});

        if(this.state.isToggled == true) {
            document.querySelector("body").style.background = "rgb(241, 241, 241)";
        } else document.querySelector("body").style.background = "rgb(21, 21, 21)";
    }

    render() {
        return (
            <label className="switch">
              <input onClick={this.onClick} type="checkbox" />
              <span className="slider round"></span>
            </label>
        );
    }
}

export default Switch;