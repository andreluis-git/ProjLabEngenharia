import axios from 'axios'

const addPost = data => {
    let formdata = new FormData();
    formdata.append("form", {"nome":"nomestr"})
    formdata.append("imgLogo", data["imagemLogo"][0])
    formdata.append("imgBanner", data["imagemBanner"][0])

    console.log(data["imagemLogo"][0])
    console.log(data["imagemBanner"][0])

    for(var key of formdata.entries()){
        console.log(key[0] + "," + key[1])
    }
    axios({
        method: "post",
        url: "http://localhost:8080/api/gerente/cadastrar/teste",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
    })
.then(() => {
    console.log("Deu tudo certo", formdata)
    // history.push("/")
})
.catch(() => {
    console.log("DEU ERRADO", formdata)
})}

const CadastroLojaSerice = {
    addPost
}

export default CadastroLojaSerice;