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

    componentWillMount() {
        this.chamaService()
    }

    chamaService = () => {
        let categorias = SideMenuService.getCategorias();
        this.setState({
            categorias: categorias
        })
    }

    render() {
        return (
            <div className='sidenav'>
                {this.state.categorias.map(categoria => (
                    <a href="/">{ categoria }</a>
                ))}
                {/* <button onClick={this.chamaService}>Botao</button> */}
            </div>
        );
    };
}

export default SideMenu;