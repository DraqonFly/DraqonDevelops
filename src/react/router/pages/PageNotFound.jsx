import React, {Component} from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/panel/Panel.jsx";
import Headline from "../../components/headline/Headline.jsx";
import Paragraph from "../../components/paragraph/Paragraph.jsx";
import Link from "../../components/link/Link.jsx";

class HomePage extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Panel>
                <Headline size="1"> DraqonDevelops.com </Headline>

                <Headline size="2"> Page Not Found </Headline>
                <Paragraph> 
                    The page you requested could not be found. <br/>
                    <Link> <ReactLink to="/"> click here to return to this websites main page. </ReactLink> </Link>
                </Paragraph>
            </Panel>
        );
    }
}

export default HomePage;