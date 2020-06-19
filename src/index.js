import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './assets/css/index.css';
import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('all')
);
serviceWorker.unregister();
