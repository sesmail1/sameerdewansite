import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
import { modal_reducer } from './redux/reducers/modal';




const store = createStore(modal_reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
