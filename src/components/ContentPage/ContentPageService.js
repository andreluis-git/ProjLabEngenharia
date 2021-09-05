import axios from 'axios'

let url = 'http://localhost:8080/api';

const getProdutos = (categoria) => {
    let produtos = [];
    switch(categoria) {
        case 'Categoria 0':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    nome: 'Notebook ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 1':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    nome: 'Notebook ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        default:
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                    nome: 'Notebook ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
    }
    return produtos;
}

// const getBanner = () => {
//     return "https://images.pexels.com/photos/4092125/pexels-photo-4092125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
// }

const getBanner = () => new Promise((resolve, reject) => {
    axios.get(url + '/loja')
        .then(result => {
            resolve(result.data)
        })
        .catch(error => {
            reject(error)
        })
});

const ContentPageService = {
    getProdutos,
    getBanner
}

export default ContentPageService;