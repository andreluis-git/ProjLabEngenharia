import axios from 'axios'

const getLogo = () => {
    return 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
}

// const getLogo = () => new Promise((resolve, reject) => {
//     axios.get('http://localhost:8080/api/logo')
//         .then(result => {
//             resolve(res.data);
//         })
//         .catch(error => {
//             reject(error);
//         })
// });

const HeaderService = {
    getLogo
}

export default HeaderService;