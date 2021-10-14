import React, {useState} from 'react'
import axios from 'axios'

import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default () => {

    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm()

    //const addPost = data => console.log(data)

    const addPost = data => axios.post("", data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })



    return (
        <div class="container">
            <form onSubmit={handleSubmit(addPost)}>
            <div class=" mt-3 mb-3">
                <label for="exampleInputEmail1">Nome do produto</label>
                <input id="nomeProduto" class="form-control" type="text" {...register("nome")} placeholder="Pizza doce" />
            </div>
            <div class=" mt-3 mb-3">
                <label for="exampleInputEmail1">Preço do produto</label>
                <input  id="precoProduto" class="form-control" type="text" {...register("preco")} placeholder="Pizza doce" />
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleInputEmail1">Descrição do produto</label>
                <input  id="descricaoProduto" class="form-control" type="text" {...register("descricao")} placeholder="Pizza doce"/>
            </div>
            <div class="mt-3 mb-3">
                <label for="exampleFormControlFile1">Imagem do produto</label>
                <input id="imagemProduto" type="file" {...register("imagem")} class="form-control-file"/>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <button type="submit" class="btn btn-primary btn-md btn-block">Salvar</button>
            </div>
            </form>
        </div>
    )
}