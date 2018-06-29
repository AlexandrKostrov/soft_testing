    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './app';
    import { createStore } from 'redux';
    import { Provider } from 'react-redux';

    import reducers from './components/reducers';
    

    const store = createStore(reducers);
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById('root')
    );

