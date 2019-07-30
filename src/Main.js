import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateLayout from './components/PrivateLayout';
import PublicLayout from './components/PublicLayout';

// import  {isTokenExpired} from "./services/Util";

import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import RedirectTo from './components/RedirectTo';
import NotFound from './components/NotFound';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = JSON.parse(localStorage.getItem('username'));
    return token ? (
        <Route { ...rest } render={ matchProps => (
            <PrivateLayout>
                <RedirectTo/>
                <Component { ...matchProps } />
            </PrivateLayout>
        ) }/>
    ) : <Redirect to="/login"/>;
};

const PublicRoute = ({component: Component, ...rest}) => {
    const token = JSON.parse(localStorage.getItem('username'));
    return (token !== null) ? <Redirect to="/app/home"/> : (
        <Route { ...rest } render={ matchProps => (
            <PublicLayout>
                <Component { ...matchProps } />
            </PublicLayout>
        ) }/>
    );
};

class Main extends Component {
    render() {
        const token = JSON.parse(localStorage.getItem('username'));
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ (token !== null) ? '/app/home' : '/login' }/>
                    </Route>
                    <PublicRoute path="/login" component={ Login }/>
                    <PrivateRoute path="/app/home" component={ Home }/>
                    <PrivateRoute path="/app/profile" component={ Profile }/>
                    <PrivateRoute path="/app/logout"
                                  component={ Logout }/>
                    <Route component={ NotFound }/>
                </Switch>
            </Router>
        );
    }
}

export default Main;
