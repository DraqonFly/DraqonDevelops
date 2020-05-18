import React, {Component} from "react";
import PageRouter from "../router/router/PageRouter.jsx";
import Menu from "./molecules/menu/Menu.jsx"; 

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
                    <div> General </div>
                    <div> Developmente </div>
                    <div> About </div>
                </Menu>
                <PageRouter />
            </div>
        );
    }
}

export default App;