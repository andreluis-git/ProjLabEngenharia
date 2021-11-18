import React, { useEffect, useState } from 'react'
import ContentPageService from './ContentPageService';

import { connect } from 'react-redux'
// import ContentPageActions from './Actions/ContentPageActions';

const ContentPage = () => {

    const [produtos, setProdutos] = useState([]);
    const [banner, setBanner] = useState([]);

    const buscarProdutos = async () => {
        let url = window.location.href;
        url = url.replace("_", " ")
        url = url.replace("http://localhost:3000/", "")
        setProdutos(ContentPageService.getProdutos(url))
    }

    const buscarBanner = async () => {
        let data = ContentPageService.getBanner();
        if (data != null) {
            setBanner(data);
        }
    }

    useEffect(() => {
        buscarBanner();
        buscarProdutos();
    }, [])

    return (
            <div>
                <div className="row p-0 m-0 d-flex justify-content-center" style={{minWidth: '80vw'}}>
                    { banner && 
                        <div className='p-2'>
                            <img src={ banner } alt='...' style={{maxHeight: '250px', width: '100%'}} />
                        </div>
                    }
                    {/* <button onClick={() => this.testeBotao()}>Botao</button> //redux */}
                    {produtos.map(produto => (
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
}

export default ContentPage;