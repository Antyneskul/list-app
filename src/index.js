import trackErrors from './libs/tracker/tracker';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';

import './index.css';
import * as serviceWorker from './serviceWorker';

trackErrors(parseInt(Math.random() * 1000));

// setTimeout(() => {
//     throw new Error('Heyyyy');
// }, 5000);

ReactDOM.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
