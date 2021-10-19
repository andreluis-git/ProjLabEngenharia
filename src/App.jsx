import React from 'react';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import ContentPage from './components/ContentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroProduto from './components/CadastroProduto';
import CadastroLoja from './components/CadastroLoja';

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
                <Route exact path="/cadastro_produto" component={CadastroProduto} />
                <Route exact path="/cadastro_loja" component={CadastroLoja} />
            </Switch>
        </Router>
    );
}