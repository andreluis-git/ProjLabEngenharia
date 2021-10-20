/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CadastroProdutoSerice from './CadastroProdutoService'

class CadastroProduto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagem: null,
            nome: ""
        };
    }

    handleFile(e) {
        console.log(e.target.files);
        let file = e.target.files[0]
        this.setState({
            imagem: file
        }, () => console.log(this.state.imagem))
    }

    handleSubmit() {
        CadastroProdutoSerice.addPost()
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        }, () => console.log(this.state.nome))
    }

    render() {
        return (
            <div>
                <input 
                    type="file"
                    name="file"
                    onChange={(e) => this.handleFile(e)} 
                />

                <div className="container">
                 <form onSubmit={this.handleSubmit}>
                     <div className=" mt-3 mb-3">
                         <label for="exampleInputEmail1">Nome do produto</label>
                         <input 
                            id="nomeProduto" 
                            className="form-control" 
                            type="text"
                            name="nome"
                            value={this.state.nome}
                            placeholder="Pizza doce"
                            onChange={(e) => this.handleInputChange(e)} 
                        />
                     </div>
                     {/* <div className=" mt-3 mb-3">
                         <label for="exampleInputEmail1">Preço do produto</label>
                         <input  id="precoProduto" className="form-control" type="text" {...register("preco")} placeholder="Pizza doce" />
                     </div>
                     <div className="mt-3 mb-3">
                         <label for="exampleInputEmail1">Descrição do produto</label>
                         <input  id="descricaoProduto" className="form-control" type="text" {...register("descricao")} placeholder="Pizza doce"/>
                     </div>
                     <div>
                         <select className="form-control" id="exampleFormControlSelect1">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </select>
                     </div>
                     <div className="mt-3 mb-3">
                         <label for="exampleFormControlFile1">Imagem do produto</label>
                         <input id="imagemProduto" type="file" {...register("imagem")} className="form-control-file"/>
                     </div> */}
                     <div className="d-flex align-items-center justify-content-center">
                         <button type="submit" className="btn btn-primary btn-md btn-block">Salvar</button>
                     </div>
                 </form>
             </div>
            </div>
        )
    }
}

export default CadastroProduto;


// const seila = () => {

//     const { register, handleSubmit, formState: { errors } } = useForm()    
    
//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit(CadastroProdutoSerice.addPost)}>
//                 <div className=" mt-3 mb-3">
//                     <label for="exampleInputEmail1">Nome do produto</label>
//                     <input id="nomeProduto" className="form-control" type="text" {...register("nome")} placeholder="Pizza doce" />
//                 </div>
//                 <div className=" mt-3 mb-3">
//                     <label for="exampleInputEmail1">Preço do produto</label>
//                     <input  id="precoProduto" className="form-control" type="text" {...register("preco")} placeholder="Pizza doce" />
//                 </div>
//                 <div className="mt-3 mb-3">
//                     <label for="exampleInputEmail1">Descrição do produto</label>
//                     <input  id="descricaoProduto" className="form-control" type="text" {...register("descricao")} placeholder="Pizza doce"/>
//                 </div>
//                 <div>
//                     <select className="form-control" id="exampleFormControlSelect1">
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                         <option>5</option>
//                     </select>
//                 </div>
//                 <div className="mt-3 mb-3">
//                     <label for="exampleFormControlFile1">Imagem do produto</label>
//                     <input id="imagemProduto" type="file" {...register("imagem")} className="form-control-file"/>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-center">
//                     <button type="submit" className="btn btn-primary btn-md btn-block">Salvar</button>
//                 </div>
//             </form>
//         </div>
//     )
// }