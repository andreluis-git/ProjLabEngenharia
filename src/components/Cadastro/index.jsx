/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CadastroService from './CadastroService'
import './Cadastro.css'


export default () => {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <>
            <div className='header2 d-flex ' style={{color:'white'}}>
                <h3>Cadastro</h3>
            </div>
            <div className="containerDE2">
                <form className=' container justify-content-sm-center' onSubmit={handleSubmit(CadastroService.AddPost)}>
                <div className='mb-1 backgr labelBlack '>
                    <div>
                        <h4>Cadastro Usuario</h4>
                    </div>
                    <div class=" mt-3 mb-3">
                        <label  for="exampleInputEmail1 ">Nome completo</label>
                        <input id="nomeProduto" class="form-control" type="text" {...register("nomeUsuario")} />
                    </div>
                    <div class=" mt-3 mb-3">
                        <label for="exampleInputEmail1">E-mail</label>
                        <input id="nomeProduto" class="form-control" type="text" {...register("emailUsuario")} />
                    </div>
                    <div class=" mt-3 mb-3">
                        <label for="exampleInputEmail1">Senha</label>
                        <input id="nomeProduto" class="form-control" type="text" {...register("senha")} />
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                        <button type="button" class="btn btn-secondary btn-md btn-block " onClick={() => history.goBack()} style={{backgroundColor:'#2c2d33'}}>Voltar</button>
                        <button type="submit" class="btn btn-secondary btn-md btn-block button3" style={{backgroundColor:'#2c2d33'}}>Finalizar</button>
                    </div>
                </div>
                </form>
            </div>
        </> 
    )   
}