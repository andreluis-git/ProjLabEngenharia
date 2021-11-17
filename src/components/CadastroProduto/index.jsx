/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CadastroProdutoSerice from './CadastroProdutoService'
import './CadastroProduto.css';

// class CadastroProduto extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imagem: null,
//             nome: ""
//         };
//     }

//     handleFile(e) {
//         console.log(e.target.files);
//         let file = e.target.files[0]
//         this.setState({
//             imagem: file
//         }, () => console.log(this.state.imagem))
//     }

//     handleSubmit() {
//         CadastroProdutoSerice.addPost()
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
    
//         this.setState({
//             [name]: value
//         }, () => console.log(this.state.nome))
//     }

//     render() {
//         return (
//             <div>
//                 <input 
//                     type="file"
//                     name="file"
//                     onChange={(e) => this.handleFile(e)} 
//                 />

//                 <div className="container">
//                  <form onSubmit={this.handleSubmit}>
//                      <div className=" mt-3 mb-3">
//                          <label for="exampleInputEmail1">Nome do produto</label>
//                          <input 
//                             id="nomeProduto" 
//                             className="form-control" 
//                             type="text"
//                             name="nome"
//                             value={this.state.nome}
//                             placeholder="Pizza doce"
//                             onChange={(e) => this.handleInputChange(e)} 
//                         />
//                      </div>
//                      {/* <div className=" mt-3 mb-3">
//                          <label for="exampleInputEmail1">Preço do produto</label>
//                          <input  id="precoProduto" className="form-control" type="text" {...register("preco")} placeholder="Pizza doce" />
//                      </div>
//                      <div className="mt-3 mb-3">
//                          <label for="exampleInputEmail1">Descrição do produto</label>
//                          <input  id="descricaoProduto" className="form-control" type="text" {...register("descricao")} placeholder="Pizza doce"/>
//                      </div>
//                      <div>
//                          <select className="form-control" id="exampleFormControlSelect1">
//                              <option>1</option>
//                              <option>2</option>
//                              <option>3</option>
//                              <option>4</option>
//                              <option>5</option>
//                          </select>
//                      </div>
//                      <div className="mt-3 mb-3">
//                          <label for="exampleFormControlFile1">Imagem do produto</label>
//                          <input id="imagemProduto" type="file" {...register("imagem")} className="form-control-file"/>
//                      </div> */}
//                      <div className="d-flex align-items-center justify-content-center">
//                          <button type="submit" className="btn btn-primary btn-md btn-block">Salvar</button>
//                      </div>
//                  </form>
//              </div>
//             </div>
//         )
//     }
// }

// export default CadastroProduto;


export default () => {

    const { register, handleSubmit, formState: { errors } } = useForm()    
    
    // return (
    //     <div className="row p-0">
    //         <div className='col-12 header2 d-flex'>
    //             <h4 className='p-1'>Cadastro Produto</h4>
    //         </div>
    //         <form className='col-9' onSubmit={handleSubmit(CadastroProdutoSerice.addPost)}>
    //             <div className=" mt-3 mb-3">
    //                 <label for="exampleInputEmail1">Nome do produto</label>
    //                 <input id="nomeProduto" className="form-control" type="text" {...register("nome")} placeholder="Pizza doce" />
    //             </div>
    //             <div className=" mt-3 mb-3">
    //                 <label for="exampleInputEmail1">Preço do produto</label>
    //                 <input  id="precoProduto" className="form-control" type="text" {...register("preco")} placeholder="Pizza doce" />
    //             </div>
    //             <div className="mt-3 mb-3">
    //                 <label for="exampleInputEmail1">Descrição do produto</label>
    //                 <input  id="descricaoProduto" className="form-control" type="text" {...register("descricao")} placeholder="Pizza doce"/>
    //             </div>
    //             <div>
    //                 <select className="form-control" id="exampleFormControlSelect1">
    //                     <option>1</option>
    //                     <option>2</option>
    //                     <option>3</option>
    //                     <option>4</option>
    //                     <option>5</option>
    //                 </select>
    //             </div>
    //             <div className="mt-3 mb-3">
    //                 <label for="exampleFormControlFile1">Imagem do produto</label>
    //                 <input id="imagemProduto" type="file" {...register("imagem")} className="form-control-file"/>
    //             </div>
    //             <div className="d-flex align-items-center justify-content-center">
    //                 <button type="submit" className="btn btn-primary btn-md btn-block">Salvar</button>
    //             </div>
    //         </form>
    //     </div>
    // )

    return (
        <div className='header2' style={{backgroundColor:'#444444'}}>
            <div className='header2 d-flex ' style={{color:'white'}}>
                <h3>Cadastro</h3>
            </div>
            <div className="containerDE2">
                <form className='container justify-content-sm-center' onSubmit={handleSubmit(CadastroProdutoSerice.addPost)}>
                    <div className='backgr '>
                        <div>
                            <h4>Cadastro de Produto</h4>
                        </div>
                        <div class=" mt-3 mb-3 ">
                            <label for="exampleInputEmail1">Nome do Produto</label>
                            <input required id="nomeProduto" class="form-control" type="text" {...register("nomeProduto")}/>
                        </div>
                        <div class=" mt-3 mb-3">
                            <label for="exampleInputEmail1">Preço do Produto</label>
                            <input  id="precoProduto" class="form-control" type="text" {...register("precoProduto")}/>
                        </div>
                        <div class="mt-3 mb-3 ">
                            <label for="exampleInputEmail1">Descrição do produto</label>
                            <input  id="descricaoProduto" class="form-control" type="text" {...register("descricaoProduto")}/>
                        </div>
                        <div class='mt-3 mb-3 row'>
                            <div class='col-sm-6'>
                                <label for="exampleInputEmail1">Categoria do produto</label>
                                <input  id="descricaoProduto" class="form-control" type="text" {...register("descricaoProduto")}/>
                            </div>
                            <div class='col-sm-6'>
                                <label for="exampleInputEmail1">Categorias</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Doces</option>
                                    <option>Salgados</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-3 mb-3">
                            <label for="exampleFormControlFile1">Imagem do produto</label>
                            <input id="imagemProduto" type="file" {...register("imagem")} className="form-control-file"/>
                        </div>
                        <div class="d-flex justify-content-center mt-5 mb-5">
                            <button class="btn btn-secondary btn-md btn-block " style={{backgroundColor:'#2c2d33'}}>Cancelar</button>
                            <button type="submit" class="btn btn-secondary btn-md btn-block button3" style={{backgroundColor:'#2c2d33'}}>Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
    )   
}