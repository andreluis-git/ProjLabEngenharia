import React, { useEffect, useState } from 'react'
import './SideMenu.css'
import SideMenuService from './SideMenuService';
import { useHistory } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';

const SideMenu = (props) => {

    const history = useHistory();

    const  [categorias, setCategorias] = useState([]);    

    const chamaService = async () => {
        SideMenuService.getCategorias().then(data => setCategorias(data))
    }
    
    useEffect(() => {
        chamaService();
    }, [])
    
    console.log(categorias)

    const teste = (categoria) => {
        history.push("/" + categoria.replace(/[^\w\s]/gi, ''))
    }

    return (
        <div style={{ width: "100%" }}>
        <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
          <Sidenav.Body>
            <Nav>
            {props.categorias && props.categorias.map((categoria, index) => (
                <Nav.Item eventKey={index} onClick={() => {teste(categoria)}}>
                    {categoria}
                </Nav.Item> 
            ))}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
}

export default SideMenu;