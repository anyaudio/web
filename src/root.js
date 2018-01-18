import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './static/css/root.css';


// Containers
import Header from './containers/headerContainer';
import NavigationHome from './containers/navigation/navigationHomeContainer';
import NavigationSearch from './containers/navigation/navigationSearchContainer';
import Player from './containers/playerContainer';
import Sidebar from './containers/sideBarContainer';

// Router root
const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className='page'>
        <div className='page-top'>
          <Header />
        </div>
        <div className='page-middle uk-flex'>
          <div className="content-container uk-container">
            <Route exact path='/' component={NavigationHome} />
            <Route exact path='/search/:q' component={NavigationSearch} />
          </div>

          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
        <div className='page-bottom'>
          <Player />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
