import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import Reducer from './rootReducer';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const middleWare = applyMiddleware(promiseMiddleware());
let store = createStore(Reducer, compose(
  middleWare,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
