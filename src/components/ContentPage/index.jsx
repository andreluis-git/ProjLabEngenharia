import React from 'react'
import ContentPageService from './ContentPageService';

import { connect } from 'react-redux'
// import ContentPageActions from './Actions/ContentPageActions';

class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            banner: '',
            testeList: ['1','2','3','4','5']
        };
    };

    componentDidUpdate = () => {
        if (this.props.value !== this.state.produtos) {
            this.setState({
                produtos: this.props.value
            })
        }
    }

    async componentDidMount() {
        let produtos = this.props.value;
        let banner = await ContentPageService.getBanner();
        this.setState({
            produtos: produtos,
            banner: banner.banner
        })
    };

    //redux
    // testeBotao() {
    //     this.props.setContentPageProdutos(this.state.testeList);
    // }

    render() {
        return (
            <div>
                <div className="row p-0 m-0 d-flex justify-content-center" style={{minWidth: '80vw'}}>
                    { this.state.banner && 
                        <div className='p-2'>
                            <img src={ this.state.banner } alt='...' style={{maxHeight: '250px', width: '100%'}} />
                        </div>
                    }
                    {/* <button onClick={() => this.testeBotao()}>Botao</button> //redux */}
                    {this.state.produtos.map(produto => (
                        <div className="card m-1" style={{width: '18rem'}} key={produto.key}>
                            <img src={produto.img} className="card-img-top p-1" alt="..." style={{height:'250px'}} />
                            <div className="card-body">
                                <strong className="card-title">{produto.nome}</strong>
                                <p className="card-text" style={{color: 'var(--cor-azulEscuro)'}}>R$ {produto.preco.toFixed(2)}</p>
                            </div>
                        </div>  
                    ))}</div>
            </div>
        );
    };
}

const mapStateToProps = store => ({
    value: store.contentPageReducer.produtos
})

// const mapDispatchToProps = dispatch => ({
//     setContentPageProdutos: produtos => dispatch(ContentPageActions.setContentPageProdutos(produtos))
// })

export default connect(mapStateToProps)(ContentPage);