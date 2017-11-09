import React from 'react';

import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h2><Link to='/'>AnyAudio WebApp</Link></h2>
      </div>
    )
  }
}
