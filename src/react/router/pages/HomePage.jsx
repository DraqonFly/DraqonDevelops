import React, {Component} from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import Link from "../../components/atoms/link/Link.jsx";

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
                <br/>

                <Headline size="2"> Index Page </Headline>
                <Paragraph> 
                    Hello, greetings and welcome to my website. <br/> 
                    This site is currently in development. <br/>
                    Have fun exploring a developers multiverse.
                </Paragraph>

                <Headline size="3"> About this Website </Headline>
                <Paragraph> 
                    Find out more about how this website got created. <br/>
                    This will especially cover the technologies used in this website. <br/>
                    <Link> <ReactLink to ="about/AboutThisWebsite"> Click here to find out more. </ReactLink> </Link>
                </Paragraph>


                <Headline size="3"> Boilerplate Corner </Headline>
                <Paragraph> 
                    Check out the Boilerplate Corner. <br/>
                    There you can find all my web-development boilerplates. <br/>
                    Also you can download and use them, to quickly create your own projects. <br/>
                    <Link> <ReactLink to ="BoilerplateCorner"> Click here to visit the Boilerplate Corner. </ReactLink> </Link>
                </Paragraph>

                <Headline size="3"> Git Repositories </Headline>
                <Paragraph> 
                    Explore my public repositories. <br/>
                    In those repositories, my public projects stored and versioned. <br/>
                    <Link> <ReactLink to ="GitRepositories"> Click here to visit the Git Repositories. </ReactLink> </Link>
                </Paragraph>

            </Panel>
        );
    }
}

export default HomePage;