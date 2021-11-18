import React, { useEffect, useState } from 'react';

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import ContentPage from './components/ContentPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroProduto from './components/CadastroProduto';
import CadastroLoja from './components/CadastroLoja';

import Login from './components/Login';

import './App.css'
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
                        <Route exact path="/cadastro_produto" component={CadastroProduto} />
                        <Route exact path="/cadastro_loja" component={CadastroLoja} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;