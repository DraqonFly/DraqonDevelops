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
                <br/>

                <Headline size="2"> Git Repositories </Headline>
                <Paragraph>
                    On this page you can see all my git repositories. <br/>
                    Git repositories contain versioned copies of your project. <br/>
                    You can find a list of my git repositories below this text.
                </Paragraph> <br/><br/>

                <Headline size="3"> Cloning Repositories </Headline>
                <List isOrdered={true}>
                    <ol>
                        <Headline size="4"> Get npm and git </Headline>
                        <li> make sure git is installed (official link:<span className="inlineLink"><a href="https://git-scm.com/downloads">git-scm.com/downloads</a></span>)</li>
                        <li> make sure npm is installed (official link:<span className="inlineLink"><a href="https://www.npmjs.com/get-npm">npmjs.com/get-npm</a></span>)</li>
                        <br/>

                        <Headline size="4"> Clone git repository </Headline>
                        <li> Visit any repository which interests you and clone the repository 
                            <ol> 
                                <li> Copy the url in the 'Clone or Download' tab of the repositories page</li> 
                                <li> Open up your terminal and 'cd' into a folder of your choice. </li> 
                                <li> type 'git clone' and paste the copied path afterwards. (as one command) </li>
                             </ol>
                        </li> 
                        <br/>

                        <Headline size="4"> Update git repository </Headline>
                        <li> 'cd' into the repositories main folder </li>
                        <li> Run following command to update the project: 'git pull && npm install' </li>
                        <br/>

                        <Headline size="4"> Run webserver </Headline>
                        <li> Run following command to start the webserver: 'npm start'</li>
                        <li> The webserver then opens a browsertab running the cloned project <br/>
                             You can manually navigate to the running webserver using the url: <span className="inlineLink"><a href="http://localhost:8080">localhost:8080</a></span>
                        </li>
                    </ol>
                </List> <br/><br/>

                <Headline size="3" class="listHeadline"> Public Git Repositories </Headline>
                <Headline size="4" class="listHeadline"> Feature Complete </Headline>

                <List isOrdered={false} listPoints={false}>
                    
                    <li className="preview"> Sudoku 
                        <img className="previewImage" src="/src/assets/images/sudoku.png" alt="no image"/>
                        <Paragraph class="description">
                            Sudoku is a logic game where you need to fill a grid. <br/>
                            The grid contains 3 x 3 squares in a 2D matrix. <br/><br/>
                            Each square contains 9 numbers and is partially filled. <br/> 
                            You need to fill out all the blank fields in the grid. <br/><br/>
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Sudoku"> visit Sudoku repository </a> </Link> 
                    </li> 
                    


                    <li className="preview"> Betting-Office
                        <img className="previewImage" src="/src/assets/images/noPreview.png" alt="no image"/>
                        <Paragraph class="description">
                            Betting-Office simulates slugraces with virtual money. <br/>
                            You can select a slug, a map and the amount to bet. <br/><br/>
                            After that your slug will take place in a slugrace. <br/>
                            Depending on the outcome, you may earn some money. <br/><br/>
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Betting-Office"> visit Betting-Office repository </a> </Link> 
                    </li> 
 
                    
                    
                    <li className="preview"> Senso
                    <img className="previewImage" src="/src/assets/images/noPreview.png" alt="no image"/>
                        <Paragraph class="description">
                            Senso is a digital memory game based on Simon Says. <br/>
                            An AI gives you a blinking order you need to repeat. <br/>
                            You simply need to repeat his blinking order. <br/><br/>
                            During time, blinks increment and lights get added. <br/>
                            If you fail, you need to redo last order and lose 1 health. <br/>
                            When a new light gets added, you regain 1 health. <br/>

                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Senso"> visit Senso repository </a> </Link> 
                    </li>  
                    <br/>
                    
                    <Headline size="3" class="listHeadline"> Public Git Repositories </Headline>
                    <Headline size="4" class="listHeadline last"> Work in Progress </Headline> 

                    <li className="preview"> Chess 
                        <img className="previewImage" src="/src/assets/images/chess.png" alt="no image"/>
                        <Paragraph class="description">
                            Chess is a strategy game where your goal is to survive. <br/>
                            You need to kill your opponent's king in order to win. <br/><br/>
                            Also you need to protect your king from your opponent. <br/>
                            The opponent you will face, will be an algorythm. <br/><br/>
                            Please note: This project is not done yet. <br/>
                        </Paragraph>  
                        <Link class="repoLink"> <a target="blank"  href="https://github.com/DraqonFly/Schach"> visit Chess repository </a> </Link> 
                    </li> 
                </List>


            </Panel>
        );
    }
}

export default GitRepositories;