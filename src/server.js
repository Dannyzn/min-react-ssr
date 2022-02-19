import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';

// SSR 架构下浏览器端脚本，衔接 SSR 部分
module.exports = function render(initState) {
    // 初始化 store
    const store = configureStore(initState);
    // initState 把参数传给 configureStore() 方法, 并实例化为一个新的 Store
    let content = renderToString(<Provider store={store}><App /></Provider>)
    // 利用 renderToString() 得到服务端渲染的 HTML 字符串 content

    const preLoadState = store.getState();
    // 调用 store.getState() 得到的 状态为 preLoadState

    return { content, preLoadState}
    // 返回 HTML 字符串 content, preLoadState
}