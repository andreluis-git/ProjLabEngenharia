import axios from 'axios'

const addPost = data => {
    let formdata = new FormData();
    let requestJson = {
        nome: data["nome"],
        facebook: data["facebook"],
        instagram: data["instagram"],
        whatsapp: data["celular"],
        email: data["email"]
    }
    formdata.append("form", JSON.stringify(requestJson))
    formdata.append("imgLogo", data["imagemLogo"][0])
    formdata.append("imgBanner", data["imagemBanner"][0])
    
    axios({
        method: "post",
        url: "http://localhost:8080/api/gerente/cadastrar/loja",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then(() => {
        console.log("Deu tudo certo", formdata)
    })
    .catch(() => {
        console.log("DEU ERRADO", formdata)
    })
}

const CadastroService = {
    addPost
}

export default CadastroService;