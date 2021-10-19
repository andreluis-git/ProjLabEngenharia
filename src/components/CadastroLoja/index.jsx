/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CadastroLojaSerice from './CadastroLojaService'

export default () => {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div class="container">
            <form onSubmit={handleSubmit(CadastroLojaSerice.addPost)}>
            <div class=" mt-3 mb-3">
                <label for="exampleInputEmail1">Nome da loja</label>
                <input id="nomeProduto" class="form-control" type="text" {...register("nome")} />
            </div>
            <div class=" mt-3 mb-3">
                <label for="exampleInputEmail1">Facebook</label>
                <input  id="precoProduto" class="form-control" type="text" {...register("facebook")}/>
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleInputEmail1">Instagram</label>
                <input  id="descricaoProduto" class="form-control" type="text" {...register("instagram")}/>
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleInputEmail1">Celular</label>
                <input  id="descricaoProduto" class="form-control" type="text" {...register("celular")}/>
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input  id="descricaoProduto" class="form-control" type="text" {...register("email")} />
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleFormControlFile1">Imagem da logo</label>
                <input id="imagemProduto" type="file" {...register("imagemLogo")} class="form-control-file"/>
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleFormControlFile1">Imagem do banner</label>
                <input id="imagemProduto" type="file" {...register("imagemBanner")} class="form-control-file"/>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <button type="submit" class="btn btn-primary btn-md btn-block">Salvar</button>
            </div>
            </form>
        </div>
    )
}