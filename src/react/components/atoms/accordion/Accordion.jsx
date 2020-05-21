import React, {Component} from "react";
import Headline from "../headline/Headline";

class Accordion extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onClick = () => {
        console.log("local click on accordion head");
        this.props.onClick(this.props.id);
    }

    render(){
        return(
            <div className={String(this.props.class) === "undefined"? "accordion" : "accordion "+this.props.class}> 
                <span onClick={this.onClick}  className={this.props.expanded?"accordionHead accordionHighlight" : "accordionHead"}>
                    <img className="promoLogo" src={this.props.src} alt="no svg available" />
                    <Headline size="3"> {this.props.headline} </Headline> 
                    {this.props.expanded? <img className="arrow down" src="/src/assets/svg/arrow.svg" alt="no svg available" /> : <img className="arrow up" src="/src/assets/svg/arrow.svg" alt="no svg available" />}
                </span>
                
                {this.props.expanded? this.props.children : null}
            </div>
        );
    }
}

export default Accordion;