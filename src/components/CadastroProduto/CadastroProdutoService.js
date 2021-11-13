import axios from 'axios'

const addPost = data => {
    let formdata = new FormData();
    let requestJson = {
        nome: data["nomeProduto"],
        preco: data["precoProduto"],
        descricao: data["descricaoProduto"],
    }
    formdata.append("form", JSON.stringify(requestJson))
    formdata.append("imgBanner", data["imagem"][0])

    //console.log(data["imagem"][0])
    // for(var key of formdata.entries()){
    //     console.log(key[0] + "," + key[1])
    // }

    axios({
        method: "post",
        url: "http://localhost:8080/api/gerente/cadastrar/produto",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then(() => {
        console.log("Deu tudo certo", formdata)
        //history.push("/home")
    })
    .catch(() => {
        console.log("DEU ERRADO", formdata)
    })}

const CadastroProdutoSerice = {
    addPost
}

export default CadastroProdutoSerice;