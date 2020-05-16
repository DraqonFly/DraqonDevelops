import React, {Component} from "react";

class Headline extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    HeadlineSwitch = () => {
        console.log(this.props.size)

        switch(this.props.size){
            case ("1") : return <h1 className="headline __website"> {this.props.children} </h1>;
            case ("2") : return <h2 className="headline __page"> {this.props.children} </h2>;
            case ("3") : return <h3 className="headline"> {this.props.children} </h3>;
            case ("4") : return <h4 className="headline"> {this.props.children} </h4>;
            case ("5") : return <h5 className="headline"> {this.props.children} </h5>;
            case ("6") : return <h6 className="headline"> {this.props.children} </h6>;
            default: return <h6> ERROR </h6>;
        }
    }

    render(){
        return(
            this.HeadlineSwitch()
        );
    }
}

export default Headline;