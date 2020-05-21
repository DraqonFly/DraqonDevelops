import React, {Component} from "react";
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import BoilerplateCorner from "../pages/BoilerplateCorner";
import GitRepositories from "../pages/GitRepositories";
import AboutMe from "../pages/AboutMe";
import AboutThisWebsite from "../pages/AboutThisWebsite";

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
                <div className="pageHeight">
                {this.props.children[0]}
                    <Switch>
                        <Route exact path="/"> <div className="page"> <HomePage/> </div> </Route>
                        <Route path="/BoilerplateCorner"> <div className="page"> <BoilerplateCorner /> </div> </Route>
                        <Route path="/GitRepositories"> <div className="page"> <GitRepositories /></div></Route>
                        <Route path="/about/AboutMe"> <div className="page"> <AboutMe /> </div> </Route>
                        <Route path="/about/AboutThisWebsite"> <div className="page"> <AboutThisWebsite /></div></Route>
                        <Route> <div className="page"> <PageNotFound/> </div> </Route>
                    </Switch>
                </div>
                {this.props.children[1]}
            </HashRouter>
        );
    }
}

export default PageRouter;