import React from 'react'
import { connect } from 'react-redux';
import ContentPageActions from '../ContentPage/Actions/ContentPageActions';
import ContentPageService from '../ContentPage/ContentPageService';
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

    async chamaService(){
        let categorias = await SideMenuService.getCategorias();
        this.setState({
            categorias: categorias
        })
    }

    getProdutosByCategoria(categoria) {
        let produtos = ContentPageService.getProdutos(categoria);
        this.props.setContentPageProdutos(produtos);
    }

    render() {
        return (
            <div className='sidenav'>
                {this.state.categorias.map(categoria => (
                    <a href='/#' className="nav-link" onClick={() => this.getProdutosByCategoria(categoria)} key={categoria}>{ categoria }</a>
                ))}
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    setContentPageProdutos: produtos => dispatch(ContentPageActions.setContentPageProdutos(produtos))
})

export default connect(null, mapDispatchToProps)(SideMenu);