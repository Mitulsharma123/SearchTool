import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}