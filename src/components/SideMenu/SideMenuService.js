// import axios from 'axios';

const getCategorias = () =>    
    new Promise((resolve, reject) => {
        let categorias = [];
        for(let i = 0; i < 12; i++) {
            categorias.push('Categoria ' + i);
        }
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