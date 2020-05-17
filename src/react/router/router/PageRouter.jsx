import React, {Component} from "react";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import BoilerplateCorner from "../pages/BoilerplateCorner";
import GitRepositories from "../pages/GitRepositories";

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
                    <Route exact path="/"> <div className="page"> <HomePage/> </div> </Route>
                    <Route path="/BoilerplateCorner"> <div className="page"> <BoilerplateCorner /> </div> </Route>
                    <Route path="/GitRepositories"> <div className="page"> <GitRepositories /></div></Route>
                    <Route> <div className="page"> <PageNotFound/> </div> </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default PageRouter;