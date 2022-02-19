import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'


// CSR 架构下浏览器端脚本
// 初始化 store
const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)