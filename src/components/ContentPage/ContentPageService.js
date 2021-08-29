const getProdutos = () => {
    let produtos = [
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook',
            preco: 30.00
        },
    ];
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