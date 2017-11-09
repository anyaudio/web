import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Link} from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        This is Home.
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
