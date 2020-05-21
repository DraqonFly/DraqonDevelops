import React, { Component } from "react";
import { Link as ReactLink } from "react-router-dom";
import PageRouter from "../router/router/PageRouter.jsx";
import Menu from "./molecules/menu/Menu.jsx";
import MenuItem from "./atoms/menuItem/MenuItem.jsx";
import Switch from ".//atoms/switch/Switch.jsx";
import Link from ".//atoms/link/Link.jsx";


class App extends Component {

    constructor() {
        super();
        this.state = {
            menus: [
                {
                    horizontal: false,
                    class: "mainnav__inner",
                    menuItems: [
                        {
                            outerPos: 0,
                            innerPos: 0,
                            class: "mainnav__item --caption",
                            text: "General",
                            highlighted: false,
                            link: "none"
                        },
                        {
                            outerPos: 0,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "GeneralB",
                            highlighted: false,
                            link: "none"
                        },
                        {
                            outerPos: 0,
                            innerPos: 2,
                            class: "mainnav__item --selectable",
                            text: "GeneralC",
                            highlighted: false,
                            link: "none"
                        }
                    ]
                },
                {
                    horizontal: false,
                    class: "mainnav__inner",
                    menuItems: [
                        {
                            outerPos: 1,
                            innerPos: 0,
                            class: "mainnav__item --caption",
                            text: "Development",
                            highlighted: false,
                            link: "none"
                        },
                        {
                            outerPos: 1,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "Boilerplate Corner",
                            highlighted: false,
                            link: "/BoilerplateCorner"
                        },
                        {
                            outerPos: 1,
                            innerPos: 2,
                            class: "mainnav__item --selectable",
                            text: "Git Repositories",
                            highlighted: false,
                            link: "/GitRepositories"
                        }
                    ]
                },
                {
                    horizontal: false,
                    class: "mainnav__inner",
                    menuItems: [
                        {
                            outerPos: 2,
                            innerPos: 0,
                            class: "mainnav__item --caption",
                            text: "About",
                            highlighted: false,
                            link: "none"
                        },
                        {
                            outerPos: 2,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "About Me",
                            highlighted: false,
                            link: "/about/AboutMe"
                        },
                        {
                            outerPos: 2,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "About this Website",
                            highlighted: false,
                            link: "/about/AboutThisWebsite"
                        }
                    ]
                }
            ]
        }; 
    }

    updateActiveSection = (sectionID, selectionID) => {
        this.state.menus.map((currMenu, outerIndex) => {
            return currMenu.menuItems.map((currItem, innerIndex) => {
                if (currItem.innerPos > 0) currItem.class = "mainnav__item --selectable";
                else currItem.class = "mainnav__item --caption";
                if(innerIndex == 0 && selectionID == currItem.innerPos && sectionID == currItem.outerPos) {
                    if(currItem.highlighted == false) {
                        currItem.highlighted = true;
                        currItem.class += " --highlighted";
                    } else {
                        currItem.highlighted = false;
                        currItem.class = "mainnav__item --caption";
                    }
                } else currItem.highlighted = false;
                this.setState({ map: [...this.state.menus, currItem] })
            })
        });
        this.state.menus.map((currMenu, outerIndex) => {
            return currMenu.menuItems.map((currItem, innerIndex) => {
                if(currMenu.menuItems[0].highlighted && currItem.innerPos > 0) currItem.class += " --visible";
                else if(currItem.innerPos > 0) currItem.class = "mainnav__item --selectable";
                this.setState({ map: [...this.state.menus, currItem] })
            })
        });
    }

    resetNav = () => {
        this.state.menus.map((currMenu, outerIndex) => {
            return currMenu.menuItems.map((currItem, innerIndex) => {
                if (currItem.innerPos > 0) currItem.class = "mainnav__item --selectable";
                else currItem.class = "mainnav__item --caption";
                currItem.highlighted = false;
                this.setState({ map: [...this.state.menus, currItem] })
            })
        });
    }



    render() {
        return (
            <div>
                <PageRouter>
                    <Menu horizontal={true} class="mainnav">
                    <div onClick={this.resetNav} className="mainnav__item --caption --main"> <ReactLink to="/"> Home </ReactLink> </div>
                        {this.state.menus.map((currMenu, outerIndex) => {
                            return <Menu key={outerIndex} horizontal={currMenu.horizontal} class={currMenu.class}>
                                {currMenu.menuItems.map((currItem, innerIndex) => {
                                    return <MenuItem outerPos={currItem.outerPos} innerPos={currItem.innerPos} highlighted={currItem.highlighted} key={innerIndex} onClick={() => this.updateActiveSection(currItem.outerPos, currItem.innerPos)} class={currItem.class} >

                                        {innerIndex > 0
                                            ? <span><ReactLink to={currItem.link}> {currItem.text} </ReactLink></span> :
                                            currItem.text}
                                    </MenuItem>
                                })}
                            </Menu>
                        })}
                        <Switch />
                    </Menu>
                    <div className="footer">
                        Footer
                    </div>
                </PageRouter>
            </div>
        );
    }
}

export default App;