import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    thunk
  )
);


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
