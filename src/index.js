import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
