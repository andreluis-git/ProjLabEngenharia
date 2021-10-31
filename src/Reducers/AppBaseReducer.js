import actionTypes from './Actions/actionTypes'

const initialState = {
    base: {
        logo: "https://cdn.pixabay.com/photo/2018/04/21/17/57/pet-3339032__340.png",
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