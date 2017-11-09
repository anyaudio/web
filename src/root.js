import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Link} from 'react-router-dom';

import Header from './components/header/Header';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter basename="/anyaudio-web-app">
      <div>
        <Header />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
