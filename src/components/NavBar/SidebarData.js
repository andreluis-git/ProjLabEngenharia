// import axios from 'axios';

const getCategorias = () =>    
    new Promise((resolve, reject) => {
        let categorias = [];
            categorias.push("Cadastrar Produto");
            categorias.push("Cadastrar Loja");
        resolve(categorias);
        // axios.get('http://localhost:8080/api/categorias')
        //     .then(result => {
        //         categorias = result.data;
        //         resolve(categorias);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         reject(error)
        //     })        
    });

const SideMenuService = {
    getCategorias
}

export default SideMenuService;