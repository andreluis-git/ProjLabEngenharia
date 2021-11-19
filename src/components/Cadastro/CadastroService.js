import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddPost = data => {
    const history = useHistory();
    let formdata = new FormData();
    let requestJson = {
        nome: data["nomeUsuario"],
        email: data["email"],
        senha: data["senha"],
    }
    formdata.append("form", JSON.stringify(requestJson))

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
        history.push('/login')
        console.log("DEU ERRADO", formdata)
    })
}

const CadastroService = {
    AddPost
}

export default CadastroService;