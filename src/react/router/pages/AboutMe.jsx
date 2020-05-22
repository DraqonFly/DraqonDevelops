import React, {Component} from "react";
import {Link as ReactLink} from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import Link from "../../components/atoms/link/Link.jsx";
import List from "../../components/atoms/list/List.jsx";

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
                    Hellou, I am Niklas, a 20 years old fairly shy self-taught developer which currently lives in Dreieich-Sprendlingen near Frankfurt in Germany and 
                    consider myself a digital-native which follows the ethics of the chaos computer club and started developing applications at around age 16. <br/><br/><br/>
                </Paragraph><br/>

                <Headline size="3"> Digital fields of interest </Headline>
                <List isOrdered={false} listPoints={true}>
                        <li className="preview"> Being part of the Chaos Computer Club <br/> </li>
                        <li className="preview"> Creating, designing and modding games <br/> </li>
                        <li className="preview"> Modelling and texturing characters and scenes <br/> </li>
                        <li className="preview"> Developing and styling websites <br/> </li>
                        <li className="preview"> Taking place in competetive gaming <br/> </li>
                        <li className="preview"> Creating pointlessly silly terminal scripts <br/> </li>
                </List> <br/>

                <Headline size="3"> My Journey as Developer </Headline>
                <Paragraph>
                    If you want to know how i discovered the landscape of application development, you can read about the roads I have explored below. <br/>
                    I keep pendling between those Roads but most of the time im into Web-Development andGame-Development
                </Paragraph>
                <hr/>
                <Headline size="5"> Road I </Headline>
                <Headline size="4"> Console and Arduino Programs </Headline>
                <Paragraph>
                    I started my journey as programmer at around age 16. <br/>
                    The first thing i ever programmed was a simple stereotypical calculator which ran in the console. 
                    A little while later, i got myself an arduino for the first time and tested the hell out of it.<br/><br/>
                    This was an amazing time where everyday brought something new to learn. <br/><br/>
                </Paragraph>
                <hr/>
                <Headline size="5"> Road II </Headline>
                <Headline size="4"> Forms and Databases </Headline>
                <Paragraph>
                    About a year later i continued with learning about windows forms applications and SQL Databases. <br/><br/>
                    Theres not too much that i can remember about this time, except that i wrote alot of redundant code back then, and i enjoyed windows forms way too much.<br/><br/>
                    Also i remember that it was extremely easy for me to wrap my head around object orientated programming but until today i never really understood relational databases. <br/>
                </Paragraph>
                <hr/>
                <Headline size="5"> Road III </Headline>
                <Headline size="4"> Game Development </Headline>
                <Paragraph>
                    Ever since i can think, I follow the dream to create an adventure game in 3D. 
                    Creating a game covers a wide range from modelling, animating and rigging to texturing, drawing, sounds, musik, and scripting ofcourse.<br/><br/>
                    I have done a lot attempts on creating games and even if no game ended up getting done: every attempt extended my skills extremely.
                    I will share my newxt attempts since attempting such a huge project is always a refreshing and inspirational task, even if my expectations are higher than my skills yet.
                </Paragraph>
                <hr/>
                <Headline size="5"> Road IV </Headline>
                <Headline size="4"> Web Development </Headline>
                <Paragraph>
                    It was 2019/2020 and time for a new, yet the newest challenge: Web Development.
                    I finally want to create my own blogs, websites, wikis, web applications, web based games, api's or even shops, so i decided to give web-development a try about a year ago.<br/><br/>
                    Now I am already able to write React Components, Webpack Boilerplates and Express API's (mostly to a basic degree).<br/>
                    But with this knowledge already, and a lot of general unmentioned knowledge, i managed to create some smaller web-based games and to create this website. <br/><br/>
                </Paragraph>
                <hr/>
            </Panel>
        );
    }
}

export default AboutMe;