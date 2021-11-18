// import axios from 'axios'

// let url = 'http://localhost:8080/api';

const getProdutos = (categoria) => {
    let produtos = [];
    console.log(categoria)
    switch(categoria) {
        case 'Categoria 0':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 1':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2021/09/17/10/55/caiman-lizard-6632344__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 2':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 3':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 4':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 5':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        default:
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg',
                    nome: i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
    }
    return produtos;
}

const getBanner = () => {
    return "https://cdn.pixabay.com/photo/2016/03/03/08/40/banner-1233711__340.jpg"
}

// const getBanner = () => new Promise((resolve, reject) => {
//     axios.get(url + '/loja')
//         .then(result => {
//             resolve(result.data)
//         })
//         .catch(error => {
//             reject(error)
//         })
// });

const ContentPageService = {
    getProdutos,
    getBanner
}

export default ContentPageService;