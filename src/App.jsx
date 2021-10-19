import React from 'react';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import ContentPage from './components/ContentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/User';
import Loja from './components/Loja';

import './App.css'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                        <div className="container-fluid">
                            <div className="row">
                                <Header/>
                            </div>
                            <div className="row">
                                <div className="col-2 p-0" style={{backgroundColor: 'red'}}>
                                    <SideMenu />
                                </div>
                                <div className="col-9">
                                    <ContentPage/>
                                </div>
                            </div>
                        </div>
                </Route>
                <Route exact path="/user" component={User} />
                <Route exact path="/loja" component={Loja} />
            </Switch>
        </Router>
    );
}