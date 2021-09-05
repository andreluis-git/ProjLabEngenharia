// import axios from 'axios';

const getBase = () =>    
    new Promise((resolve, reject) => {
        let data = {
        logo: "https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        banner: "",
        categorias: [],
        instagram: "",
        facebook: "",
        whatsapp: ""
        };
        resolve(data)
    });

const AppService = {
    getBase
}

export default AppService;