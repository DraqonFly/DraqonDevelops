import React, { Component } from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import List from "../../components/atoms/list/List.jsx";
import Link from "../../components/atoms/link/Link.jsx";
 
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
                    <li> Betting-Office <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Betting-Office"> visit Betting-Office repository </a> </Link> 
                    <br/><br/></li> 
 
                    
                    <li> Webdev Boilerplates <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank" href="https://github.com/DraqonFly/Webdev-Boilerplates"> visit Webdev-Boilerplates repository </a> </Link> 
                    <br/><br/></li> 
                    
                    
                    <li> Sudoku <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Sudoku"> visit Sudoku repository </a> </Link> 
                    <br/><br/></li> 
                    
                    
                    <li> Chess <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Schach"> visit Chess repository </a> </Link> 
                    <br/><br/></li> 
                    
                    
                    <li> Senso <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Senso"> visit Senso repository </a> </Link> 
                    <br/><br/></li> 
                    
                    
                    <li> DraqonDevelops.com <br/>
                        <Paragraph class="description">
                            Informational text for this listpoint <br/>
                            second line for an informational text
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank" href="https://github.com/DraqonFly/DraqonDevelops"> visit this websites repository </a> </Link> 
                    <br/><br/></li> 
                </List>

            </Panel>
        );
    }
}

export default GitRepositories;