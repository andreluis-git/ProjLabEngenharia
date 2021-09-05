import actionTypes from "./actionTypes";

const setAppBase = value => ({
    type: actionTypes.SET_APP_BASE,
    value: value
})

const AppBaseActions = {
    setAppBase: base => setAppBase(base)
}

export default AppBaseActions;