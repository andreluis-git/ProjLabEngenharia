const getCategorias = () => {
    let categorias = [];
    for(let i = 0; i < 12; i++) {
        categorias.push('Categoria ' + i);
    }
    return categorias;
}

const SideMenuService = {
    getCategorias
}

export default SideMenuService;