import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import store from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
