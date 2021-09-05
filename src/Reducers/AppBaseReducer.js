import actionTypes from './Actions/actionTypes'

const initialState = {
    base: {
        logo: "https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        banner: "",
        categorias: [],
        instagram: "",
        facebook: "",
        whatsapp: ""
    }
}

const AppBaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_APP_BASE:
            console.log('Action Base', action.value)
            return state;
        default:
            return state;
    }
}

export default AppBaseReducer;