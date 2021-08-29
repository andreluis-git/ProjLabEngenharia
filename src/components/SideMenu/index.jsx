import React from 'react'
import './SideMenu.css'
import SideMenuService from './SideMenuService'

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        this.chamaService()
    }

    chamaService = () => {
        let categorias = SideMenuService.getCategorias();
        this.setState({
            categorias: categorias
        })
    }

    aClick = () => {
        console.log('Teste')
    }

    render() {
        return (
            <div className='sidenav'>
                {this.state.categorias.map(categoria => (
                    <a href='/#' className="nav-link" onClick={this.aClick} key={categoria}>{ categoria }</a>
                ))}
                {/* <button onClick={this.chamaService}>Botao</button> */}
            </div>
        );
    };
}

export default SideMenu;