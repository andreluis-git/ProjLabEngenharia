import React from 'react'
import { connect } from 'react-redux';
import ContentPageActions from '../ContentPage/Actions/ContentPageActions';
import ContentPageService from '../ContentPage/ContentPageService';
import './Navbar.css';
import SideMenuService from './SidebarData';

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
                            <a href='/cadastro_produto' className="nav-link" >Cadastrar Loja</a>
                            <a href='/cadastro_loja' className="nav-link" >Alterar Loja</a>
                            <a href='/cadastro_produto' className="nav-link" >Cadastrar Produto</a>
                        </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    setContentPageProdutos: produtos => dispatch(ContentPageActions.setContentPageProdutos(produtos))
})

export default connect(null, mapDispatchToProps)(SideMenu);