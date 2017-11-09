import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from '../root';
import reducers from '../reducers/index';


it('renders without crashing', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const Store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );

  const div = document.createElement('div');
  ReactDOM.render(<App  store={Store}/>, div);
});
