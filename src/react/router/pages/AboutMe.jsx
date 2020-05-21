import React, {Component} from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import Link from "../../components/atoms/link/Link.jsx";

class AboutMe extends Component
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
                <br/>

                <Headline size="2"> About Me </Headline>
                <Paragraph> 
                    Information about Me
                </Paragraph>
            </Panel>
        );
    }
}

export default AboutMe;