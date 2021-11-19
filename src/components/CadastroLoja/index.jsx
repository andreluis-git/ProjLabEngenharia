/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CadastroLojaService from './CadastroLojaService'
import './CadastroLoja.css';


export default () => {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <>
            <div className='header2 d-flex ' style={{color:'white'}}>
                <h3>Cadastro</h3>
            </div>
            <div className="containerDE">
                <form className=' container justify-content-sm-center' onSubmit={handleSubmit(CadastroLojaService.addPost)}>
                <div className='backgr'>
                    <div>
                        <h4>Cadastro Loja</h4>
                    </div>
                    <div class=" mt-3 mb-3  ">
                        <label for="exampleInputEmail1">Nome da loja</label>
                        <input id="nomeProduto" class="form-control" type="text" {...register("nomeLoja")} />
                    </div>
                    <div class=" mt-3 mb-3">
                        <label for="exampleInputEmail1">Facebook</label>
                        <input  id="precoProduto" class="form-control" type="text" {...register("facebook")}/>
                    </div>
                    <div class="mt-3 mb-3 ">
                        <label for="exampleInputEmail1">Instagram</label>
                        <input  id="descricaoProduto" class="form-control" type="text" {...register("instagram")}/>
                    </div>
                    <div class="mt-3 mb-3 ">
                        <label for="exampleInputEmail1">Celular</label>
                        <input  id="descricaoProduto" class="form-control" type="text" {...register("celular")}/>
                    </div>
                    <div class="mt-3 mb-3 ">
                        <label for="exampleInputEmail1">Email</label>
                        <input  id="descricaoProduto" class="form-control" type="text" {...register("email")} />
                    </div>
                    <div class="mt-3 mb-3 ">
                        <label for="exampleFormControlFile1">Imagem da logo</label>
                        <input id="imagemProduto" type="file" {...register("imagemLogo")} class="form-control-file"/>
                    </div>
                    <div class="mt-3 mb-3">
                        <label for="exampleFormControlFile1">Imagem do banner</label>
                        <input id="imagemProduto" type="file" {...register("imagemBanner")} class="form-control-file"/>
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button type="submit" class="btn btn-secondary btn-md btn-block backgbtn" style={{backgroundColor:'#2c2d33'}}>Finalizar</button>
                    </div>
                </div>
                </form>
            </div>
        </> 
    )   
}