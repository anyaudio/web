import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

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
    <BrowserRouter basename='/anyaudio-web-app'>
      <div className='page'>
        <div className='page-top'>
          <Header />
        </div>
        <Row className='page-middle'>
          <Col sm={12} md={12} lg={10}>
            <Route exact path='/' component={NavigationHome} />
            <Route exact path='/search/:q' component={NavigationSearch} />
          </Col>
          <Col smHidden={true} mdHidden={true} xsHidden={true} lg={2}>
            <Sidebar />
          </Col>
        </Row>
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
