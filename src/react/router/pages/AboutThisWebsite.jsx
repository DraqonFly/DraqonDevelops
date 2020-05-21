import React, { Component } from "react";
import { Link as ReactLink } from "react-router-dom";
import Panel from "../../components/atoms/panel/Panel.jsx";
import Headline from "../../components/atoms/headline/Headline.jsx";
import Paragraph from "../../components/atoms/paragraph/Paragraph.jsx";
import Link from "../../components/atoms/link/Link.jsx";
import Accordion from "../../components/atoms/accordion/Accordion.jsx";

class AboutThisWebsite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordions: [
                {
                    src: "/src/assets/svg/react.svg",
                    headline: "MERN stack ready",
                    expanded: false,
                    id: 0,
                    content: <div className="accordionContent">
                        <Paragraph> This website is MERN stack ready.</Paragraph>
                        <Headline size="4"> What is the MERN Stack? </Headline>
                        <Paragraph>
                            <span class="mern">M</span>ongoDB: Non relational databases in BSON format. <br />
                            <span class="mern">E</span>xpress: Fetch API transferring data between frontend and backend. <br />
                            <span class="mern">R</span>eact: Javascript library for building interfaces with components <br />
                            <span class="mern">N</span>ode: JavaScript Runtime (JsRT) API built on top of chromes v8 <br />
                        </Paragraph><br/>
                        <Headline size="4"> MERN stack ready? </Headline>
                        <Paragraph>
                            The website i am creating here is currently frontend-only. <br />
                        This means that this page is not talking to an Express API or Database. <br />
                        I have local projects running the complete MERN stack but they are still in testing. <br />
                        Anyways, this frontend is built to be expanded to the MERN stack sooner or later. <br /><br />
                    Official Links: <Link> <a target="blank" href="https://www.mongodb.com/"> MongoDB </a> </Link>
                            <Link> <a target="blank" href="https://expressjs.com/"> ExpressJS </a> </Link>
                            <Link> <a target="blank" href="https://reactjs.org/"> ReactJS </a> </Link>
                            <Link> <a target="blank" href="https://nodejs.org/en/"> NodeJS </a> </Link>
                        </Paragraph>
                    </div>
                },
                {
                    src: "/src/assets/svg/webpack.svg",
                    headline: "Bundled by Webpack",
                    expanded: false,
                    id: 1,
                    content: <div className="accordionContent">
                        <Paragraph> This website is bundled by Webpack.</Paragraph>
                        <Headline size="4"> What is Webpack? </Headline>
                        <Paragraph>
                            Webpack is a static module bundler for Javascript applications. <br />
                            Besides this, Webpack also functions as a transpiler when being used with Babel. <br />
                            It then translates code from one to its own or another programming language. <br />
                            On top of this, Webpack can be used as a development-server. <br />
                        </Paragraph><br />
                        <Headline size="4"> How can use webpack for myself? </Headline>
                        <Paragraph>
                            Simply take a look at the link at the bottom of this panel. <br />
                           This blog goes through every step of creating a basic webpack configuration. <br />
                           My own webdevelopment frontend boilerplates do originate from this highly approved blogpost.<br />
                        </Paragraph>
                        <Link> <a target="blank" href="https://valentinog.com/blog/babel/"> valentinog.com/blog/babel/ </a> </Link>
                    </div>
                },
                {
                    src: "/src/assets/svg/foundation.svg",
                    headline: "Styled with Foundation",
                    expanded: false,
                    id: 2,
                    content: <div className="accordionContent">
                        <Paragraph> This website is partially styled with Foundation.</Paragraph>
                        <Headline size="4"> What is Foundation and how is it used here? </Headline>
                        <Paragraph>
                            Foundation is a css frontend framework. <br />
                            It comes with many variables and sass functions to use. <br /><br />
                            It is possible to build your website completely around foundation. <br />
                            Although i chose to only use some features of foundation to extend my sass possibilities. <br />
                            If you want to find out more about foundation, take a look at the link below <br />
                            Official Link: <Link><a target="blank" href="https://get.foundation/">get.foundation </a> </Link>
                        </Paragraph>
                    </div>
                },
                {
                    src: "/src/assets/svg/hostgator.svg",
                    headline: "Hosted on Hostgator",
                    expanded: false,
                    id: 3,
                    content: <div className="accordionContent">
                        <Paragraph> This website is hosted on Hostgator.com</Paragraph>
                        <Headline size="4"> What is Hostgator.com and how is it used here? </Headline>
                        <Paragraph>
                            Hostgator.com is mainly a Web hoster, offering this website a place to stay live. <br />
                            There are tons of options and features for domain owners and the prices are fairly low. <br />
                            All communication through this website is protected by hostgators LetsEncrypt certificates by default. <br /><br />
                            I have chosen the web-hosting Hatchling Plan for this website and am absolutely pleased. <br />
                            If you want to know more about Hostgator.com, visit their website using the link below. <br />
                            Official Link: <Link> <a target="blank" href="https://www.hostgator.com/"> hostgator.com </a> </Link>
                        </Paragraph>
                    </div>
                },
                {
                    src: "/src/assets/svg/git.svg",
                    headline: "Versioned as Repository",
                    expanded: false,
                    id: 4,
                    content: <div className="accordionContent">
                        <Paragraph> This website is versioned as Git Repository</Paragraph>
                        <Headline size="4"> What is Git? </Headline>
                        <Paragraph>
                            Git is an Open Source Distributed Version Control System. <br />
                        Projects created via git are called Git Repositories. <br />
                        Developers and teams can clone those repositories from an webinterface like github. <br />
                        They then pull remote changes and push local changes to the reopsitory. <br /><br />
                        And if the last version was a complete fail: its revertable. <br />
                        Check out git and github to create your very own repositories. <br />
                        (Files you want a backup/version for, could also be a reason to create a repository) <br />
                        Official Links: <Link> <a target="blank" href="https://github.com/"> github.com </a> </Link> <Link> <a target="blank" href="https://git-scm.com/"> git-scm.com </a> </Link>
                        </Paragraph>
                    </div>
                },
            ]
        }
    }

    accordionClick = (id) => {
        this.state.accordions.map(accordion => {
            if (accordion.id === id) accordion.expanded = !accordion.expanded;
            else accordion.expanded = false;
            this.setState({ accordion: accordion });
        })
    }

    render() {
        return (
            <Panel>
                <Headline size="1"> DraqonDevelops.com </Headline>
                <br />

                <Headline size="2"> About this Website </Headline>
                <Paragraph>
                    On this page you can learn more about the technologies used to create this website. <br />
                    Summarized this website is created with React, Webpack and Foundation. <br /><br />


                    To find out more about ta specific topic, <br />
                    simply use the accordion-menu you see below. <br />
                </Paragraph> <br /><br />

                <div className="accordionContainer">
                    {this.state.accordions.map(accordion => {
                        return <Accordion src={accordion.src} id={accordion.id} expanded={accordion.expanded} key={accordion.id} onClick={this.accordionClick} headline={accordion.headline}>
                            {accordion.content}
                        </Accordion>
                    })}
                </div>
            </Panel>
        );
    }
}

export default AboutThisWebsite;