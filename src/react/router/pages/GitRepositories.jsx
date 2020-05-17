import React, { Component } from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/panel/Panel.jsx";
import Headline from "../../components/headline/Headline.jsx";
import Paragraph from "../../components/paragraph/Paragraph.jsx";
import List from "../../components/list/List.jsx";
import Link from "../../components/link/Link.jsx";

class GitRepositories extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Panel>
                <Headline size="1"> DraqonDevelops.com </Headline>

                <Headline size="2"> Git Repositories </Headline>
                <Paragraph>
                    On this page you can see all my git repositories. <br/>
                    Git repositories contain versioned copies of your project. <br/>
                    You can find a list of my git repositories below this text.
                </Paragraph>

                <Headline size="3" class="listHeadline"> My Git Repositories </Headline>
                <List isOrdered={false}>
                    <li> Betting-Office <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/Betting-Office"> visit Betting-Office repository </a> </Link> </li>
                    <li> Webdev Boilerplates <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/Webdev-Boilerplates"> visit Webdev-Boilerplates repository </a> </Link> </li>
                    <li> Sudoku <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/Sudoku"> visit Sudoku repository </a> </Link> </li>
                    <li> Chess <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/Schach"> visit Chess repository </a> </Link> </li>
                    <li> Senso <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/Senso"> visit Senso repository </a> </Link> </li>
                    <li> DraqonDevelops.com <br/><Link class="repoLink"> <a href="https://github.com/DraqonFly/DraqonDevelops"> visit this websites repository </a> </Link> </li>
                </List>

            </Panel>
        );
    }
}

export default GitRepositories;