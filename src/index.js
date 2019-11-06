import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import App from './containers/app.js';
// import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
    //     <Routes/>
    // </Provider>
    <Routes/>
    ,
    document.getElementById('root')
);
