import React, {Component} from "react";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

class PageRouter extends Component
{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/"> <HomePage/> </Route>
                    <Route> <PageNotFound/> </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default PageRouter;