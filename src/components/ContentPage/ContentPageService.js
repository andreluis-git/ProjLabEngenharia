const getProdutos = () => {
    let produtos = [];
    for(let i = 0; i < 12; i++) {
        produtos.push({
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook ' + i,
            preco: Math.random() * (13000 - 1500) + 1500,
            key: i
        })
    }
    return produtos;
}

const getBanner = () => {
    return "https://images.pexels.com/photos/4092125/pexels-photo-4092125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}

const ContentPageService = {
    getProdutos,
    getBanner
}

export default ContentPageService;