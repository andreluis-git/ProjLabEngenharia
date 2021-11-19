import ReactDOM from 'react-dom'
import React from 'react'

import "rsuite/dist/rsuite.min.css";

import App from './App'


import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)