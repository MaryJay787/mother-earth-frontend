import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import theStore from './store';
// import WebFont from 'webfontloader';

// WebFont.load({
//     google: {
//       families: ['Playfair Display Web:300,400,700', 'serif']
//     }
//   });

ReactDOM.render(
    <Provider store={theStore} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
