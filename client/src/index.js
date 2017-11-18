import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import Reducer from './rootReducer';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const middleWare = applyMiddleware(promiseMiddleware());
let store = createStore(Reducer, middleWare);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
