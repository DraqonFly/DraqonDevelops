import React, {Component} from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import Link from "../../components/atoms/link/Link.jsx";

class AboutThisWebsite extends Component
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

                <Headline size="2"> About this Website </Headline>
                <Paragraph> 
                    Information about my Website
                </Paragraph> <br/><br/>

                <Headline size="3"> Built with React </Headline>
                <Paragraph> ‎
                    React is a frontend javascript library. <br/>
                </Paragraph> <br/>

                <Headline size="3"> Bundled with Webpack </Headline>
                <Paragraph> ‎
                    Webpack is a module bundler. <br/>
                </Paragraph> <br/>

                <Headline size="3"> Styled with Foundation </Headline>
                <Paragraph> ‎
                    Foundation is a css framework. <br/>
                </Paragraph> <br/>


                <Headline size="3"> Hosted on Hostgator.com </Headline>
                <Paragraph> ‎
                    Hostgator.com is a webhoster. <br/>            
                </Paragraph> <br/>
            </Panel>
        );
    }
}

export default AboutThisWebsite;