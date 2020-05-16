import React, {Component} from "react";
import Panel from "../../components/panel/Panel.jsx";
import Headline from "../../components/headline/Headline.jsx";
import Paragraph from "../../components/paragraph/Paragraph.jsx";

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

                <Headline size="2"> Index Page </Headline>
                <Paragraph> 
                    Hello, greetings and welcome to my website. <br/> 
                    This site is currently in development. <br/>
                    Have fun exploring a developers multiverse.
                </Paragraph>
            </Panel>
        );
    }
}

export default HomePage;