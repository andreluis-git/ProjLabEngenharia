import React, { useEffect, useState } from 'react';

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
import Login from './components/Login';

import SideMenuService from './components/SideMenu/SideMenuService';

function App() {
    const [token, setToken] = useState();
    const  [categorias, setCategorias] = useState([]);    
    
    const chamaService = async () => {
        SideMenuService.getCategorias().then(data => setCategorias(data))
    }

    useEffect(() => {
        chamaService();
        setToken(true);
    }, [])

    if(!token) {
        return <Login />
    }    

    return (
        <div className="container-fluid">
            <Router>
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <div className="col-2 p-0">
                        <SideMenu categorias={categorias} />
                    </div>
                    <Switch>
                        <div className="col-9">
                            {categorias && categorias.map((categoria, index) => (
                                <Route exact path={"/"+  categoria} component={ContentPage} />
                            ))}                            
                        </div>
                </Route>
                <Route exact path="/cadastro_produto" component={CadastroProduto} />
                <Route exact path="/cadastro_loja" component={CadastroLoja} />
                <Route exact path="/alterar_loja" component={AlterarLoja} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={LoginScreen} />
            </Switch>
            </div>
          </Router>
        </div>
    );
}

export default App;