import React, {Component} from "react";
import PageRouter from "../router/router/PageRouter.jsx";

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
            <PageRouter />
        );
    }
}

export default App;