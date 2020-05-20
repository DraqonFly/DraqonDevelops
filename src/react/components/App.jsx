import React, { Component } from "react";
import PageRouter from "../router/router/PageRouter.jsx";
import Menu from "./atoms/menu/Menu.jsx";
import MenuItem from "./atoms/menuItem/MenuItem.jsx";

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
                            highlighted: false
                        },
                        {
                            outerPos: 0,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "GeneralB",
                            highlighted: false
                        },
                        {
                            outerPos: 0,
                            innerPos: 2,
                            class: "mainnav__item --selectable",
                            text: "GeneralC",
                            highlighted: false
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
                            highlighted: false
                        },
                        {
                            outerPos: 1,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "DevelopmentB",
                            highlighted: false
                        },
                        {
                            outerPos: 1,
                            innerPos: 2,
                            class: "mainnav__item --selectable",
                            text: "DevelopmentC",
                            highlighted: false
                        },
                        {
                            outerPos: 1,
                            innerPos: 3,
                            class: "mainnav__item --selectable",
                            text: "DevelopmentD",
                            highlighted: false
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
                            highlighted: false
                        },
                        {
                            outerPos: 2,
                            innerPos: 1,
                            class: "mainnav__item --selectable",
                            text: "AboutB",
                            highlighted: false
                        }
                    ]
                }
            ]
        };
    }

    updateActiveSection = (sectionID, selectionID) => {
        console.log("Buttonclick");
        this.state.menus.map((currMenu, outerIndex) => {
            return currMenu.menuItems.map((currItem, innerIndex) => {

                if (sectionID == currItem.outerPos && selectionID == currItem.innerPos && selectionID == 0) {
                    currItem.highlighted = !currItem.highlighted;
                    if(selectionID == 0) {
                        if(currItem.highlighted == true) currItem.class = "mainnav__item --caption --highlighted";    
                        else currItem.class = "mainnav__item --caption";  
                    }

                } 
                else if(currItem.outerPos === sectionID && currMenu.menuItems[0].highlighted) {
                    currItem.class += " --visible";
                }
                else {
                    currItem.highlighted = false;
                    if(currItem.innerPos > 0) currItem.class = "mainnav__item --selectable";
                    else currItem.class = "mainnav__item --caption";

                    
                }
                
                
                this.setState({map: [...this.state.menus, currItem]})

            })

        }, console.log(this.state.menus) );




    }



    render() {
        return (
            <div>
                <Menu horizontal={true} class="mainnav">
                    {this.state.menus.map((currMenu, outerIndex) => {
                        return <Menu key={outerIndex} horizontal={currMenu.horizontal} class={currMenu.class}>
                            {currMenu.menuItems.map((currItem, innerIndex) => {
                                return <MenuItem outerPos={currItem.outerPos} innerPos={currItem.innerPos} highlighted={currItem.highlighted} key={innerIndex} onClick={() => this.updateActiveSection(currItem.outerPos, currItem.innerPos)} class={currItem.class} > {currItem.text} </MenuItem>
                            })}
                        </Menu>
                    })}
                </Menu>
                <PageRouter />
            </div>
        );
    }
}

export default App;