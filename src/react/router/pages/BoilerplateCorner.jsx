import React, { Component } from "react";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import List from "../../components/atoms/list/List.jsx";
import Link from "../../components/atoms/link/Link.jsx";
import {Link as ReactLink} from "react-router-dom";

class BoilerplateCorner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Panel>
                <Headline size="1"> DraqonDevelops.com </Headline>

                <Headline size="2"> Boilerplate Corner </Headline>
                <Paragraph>
                    This is the Boilerplate Corner. <br />
                    Boilerplates reduce effort and time when creating new projects. <br />
                    A boilerplate covers a set of files, functioning as the base for a project. <br />
                </Paragraph>

                <Headline size="3" class="listHeadline"> My Boilerplates </Headline>
                <List isOrdered={false}>
                    <li> Webpack Boilerplate 
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank" href="https://github.com/DraqonFly/Webdev-Boilerplates/tree/Webpack"> Visit Webpack Boilerplate</a> </Link>
                    <br/><br/> </li>
                    <li> React Boilerplate
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank" href="https://github.com/DraqonFly/Webdev-Boilerplates/tree/React"> Visit React Boilerplate</a> </Link>
                    <br/><br/> </li>
                    <li> Express Boilerplate 
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>
                        <Link  class="repoLink"> <a target="blank" href="https://github.com/DraqonFly/Webdev-Boilerplates/tree/Express"> Visit Express Boilerplate</a> </Link>

                    <br/><br/></li>
                </List>
            </Panel>
        );
    }
}

export default BoilerplateCorner;