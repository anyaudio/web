import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Persisted reducer
 * https://github.com/rt2zz/redux-persist
 */
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
