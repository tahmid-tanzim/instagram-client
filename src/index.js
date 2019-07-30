import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/sass/stylesheets/styles.scss';
import Main from './Main';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
        <Main/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

/**
 * Hot Module Replacement (HMR)
 * */
// module.hot && module.hot.accept();

