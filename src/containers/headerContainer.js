import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from '../components/header/header';

export default withRouter(
  connect()(Header)
);
