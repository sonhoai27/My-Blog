import * as React from "react";
import Home from "./home/home";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRouter from "../config/PrivateRouter";
import Dashboard from "./admin/Dashboard";
class Index extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact-us" />
                    <Route path="/share-product" />
                    <PrivateRouter path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}
export default Index