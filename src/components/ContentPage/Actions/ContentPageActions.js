import actionTypes from "./actionTypes";

const setContentPageProdutos = value => ({
    type: actionTypes.SET_CONTENT_PAGE_PRODUTOS,
    value: value
})

const ContentPageActions = {
    setContentPageProdutos: produtos => setContentPageProdutos(produtos)
}

export default ContentPageActions;