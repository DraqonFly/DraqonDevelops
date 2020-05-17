import React, { Component } from "react";
import Panel from "../../components/panel/Panel.jsx";
import Headline from "../../components/headline/Headline.jsx";
import Paragraph from "../../components/paragraph/Paragraph.jsx";
import List from "../../components/list/List.jsx";

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
                    <li> Webpack Boilerplate </li>
                    <li> React Boierplate </li>
                    <li> Express Boilerplate </li>
                </List>
            </Panel>
        );
    }
}

export default BoilerplateCorner;