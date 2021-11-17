import React from 'react';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import ContentPage from './components/ContentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroProduto from './components/CadastroProduto';
import Cadastro from './components/Cadastro';
import LoginScreen from './components/Login';
import Navbar from './components/NavBar/';
import Home from './components/Home';
import './App.css'
import AlterarLoja from './components/AlterarLoja';
import CadastroLoja from './components/CadastroLoja';

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
                <Route exact path="/alterar_loja" component={AlterarLoja} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={LoginScreen} />
            </Switch>
        </Router>
    );
}