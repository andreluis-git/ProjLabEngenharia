import actionTypes from '../Actions/actionTypes'

const initialState = {
    produtos: [
        {
            img: 'https://images.pexels.com/photos/5797939/pexels-photo-5797939.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            nome: 'Notebook ',
            preco: Math.random() * (13000 - 1500) + 1500,
            key: 1
        }
    ]
}

const ContentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CONTENT_PAGE_PRODUTOS:
            console.log(action.value)
            return {
                ...state,
                produtos: action.value
            }
        default:
            return state;
    }
}

export default ContentPageReducer;