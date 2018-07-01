    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './app';
    import { createStore, applyMiddleware } from 'redux';
    import { Provider } from 'react-redux';
    import promiseMiddleWare from './midleWares/promiseMiddleWare';
    import reducers from './components/reducers';
    

    const store = createStore(reducers, applyMiddleware(promiseMiddleWare));
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('root')
    );

