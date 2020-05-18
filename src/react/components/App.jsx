import React, {Component} from "react";
import PageRouter from "../router/router/PageRouter.jsx";
import Menu from "./atoms/menu/Menu.jsx"; 

class App extends Component
{
    constructor() 
    {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <Menu horizontal={true} class="mainnav">
                    <Menu horizontal={false} class="mainnav__inner">
                        <div className="mainnav__item --caption">General</div>
                        <div className="mainnav__item --selectable"> GeneralB </div>
                        <div className="mainnav__item --selectable">GeneralC</div>
                    </Menu>
                    <Menu horizontal={false} class="mainnav__inner">
                        <div className="mainnav__item --caption">Development</div>
                        <div className="mainnav__item --selectable">DevelopmentB</div>
                        <div className="mainnav__item --selectable">DevelopmentC</div>
                        <div className="mainnav__item --selectable">DevelopmentD</div>
                    </Menu>
                    <Menu horizontal={false} class="mainnav__inner">
                        <div className="mainnav__item --caption">About</div>
                        <div className="mainnav__item --selectable">AboutB</div>
                    </Menu>                
                </Menu>
                <PageRouter />
            </div>
        );
    }
}

export default App;