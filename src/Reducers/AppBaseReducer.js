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
            let { logo, banner, categorias, instagram, facebook, whatsapp } = action.value
            const { base } = state
            action.value.logo = logo ? logo : base.logo;
            action.value.banner = banner ? banner: base.banner;
            action.value.categorias = categorias ? categorias : base.categorias;
            action.value.instagram = instagram ? instagram : base.instagram;
            action.value.facebook = facebook ? facebook : base.facebook;
            action.value.whatsapp = whatsapp ? whatsapp : base.whatsapp;
            return {
                ...state,
                base: action.value
            };
        default:
            return state;
    }
}

export default AppBaseReducer;