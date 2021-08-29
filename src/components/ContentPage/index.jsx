import React from 'react'
import ContentPageService from './ContentPageService';

class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: []
        };
    };

    componentWillMount() {
        let produtos = ContentPageService.getProdutos();
        this.setState({
            produtos: produtos
        })
    };

    montarContent() {
        let maxColuns = 4;

        for(let i = 0; i < this.state.produtos.length; i++) {

        }
    }

    render() {
        return (
            <div>
                <div className="row p-0 m-0 d-flex justify-content-center" style={{minWidth: '80vw'}}>
                    {this.state.produtos.map(produto => (
                        <div className="card m-1" style={{width: '18rem'}}>
                            <img src={produto.img} className="card-img-top p-1" alt="..." style={{height:'250px'}} />
                            <div className="card-body">
                                <strong className="card-title">{produto.nome}</strong>
                                <p className="card-text" style={{color: '#ff6500'}}>R$ {produto.preco.toFixed(2)}</p>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        );
    };
}

export default ContentPage;