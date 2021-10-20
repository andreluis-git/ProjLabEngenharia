// import axios from 'axios'

// let url = 'http://localhost:8080/api';

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
                    nome: 'Livro ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 2':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://coolicias.ao/wp-content/uploads/2019/11/Receita-de-Pizza-de-Pepperoni-na-Fritadeira-El%C3%A9trica-1200x900.jpg',
                    nome: 'Pizza ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 3':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://images-americanas.b2w.io/spacey/acom/2021/03/30/ihpone12.webp',
                    nome: 'Smartphone ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 4':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://static.dafiti.com.br/p/Rebento-T%C3%AAnis-Sneaker-Leve-Masculino-Conforto-Preto-8923-3237736-1-zoom.jpg',
                    nome: 'Tenis ' + i,
                    preco: Math.random() * (13000 - 1500) + 1500,
                    key: i
                })
            }
            break;
        case 'Categoria 5':
            for(let i = 0; i < 12; i++) {
                produtos.push({
                    img: 'https://s2.glbimg.com/iJTMoECpJBloHIO1yURH-M5KHZY=/0x0:4000x2664/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/o/u/BnAAfZQZyqtmRSQ1fjWQ/5d-mark-iii-foto-de-abre.jpg',
                    nome: 'Câmera ' + i,
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

const getBanner = () => {
    return "https://www.mercadodaretifica.com.br/wp-content/uploads/2016/08/banner-promocao-08-2016.jpg"
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