import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../header/static/img/any_audio_logo.png';
import '../header/static/css/header.css';

class Header extends React.Component {
  componentDidMount() {
    let searchElement = document.getElementById('search-input');
    if (searchElement) {
      searchElement.addEventListener('keyup', event => {
        event.preventDefault();
        if (event.keyCode === 13) {
          this.search();
        }
      });
    }
  }

  search() {
    const searchElement = document.getElementById('search-input');
    const query = searchElement.value.replace(/^\s+|\s+$/g, '');  // Trailing whitespaces
    if (query.length === 0) {
      return;
    }
    searchElement.blur();
    this.props.history.push('/search/' + query);
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <div className="uk-container">
            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent">

              <div className="uk-navbar-left">
                <Link className="uk-navbar-item uk-logo uk-visible@s" to={'/'}><img src={Logo} alt="AnyAudio"> </img></Link>
              </div>

              <div className="anyaudio-search-container uk-navbar-left uk-margin-medium-left uk-margin-medium-right  uk-nav-center-sm">
                <form className="uk-search uk-search-default anyaudio-search" action="javascript:void(0)"
                      onSubmit={this.search.bind(this)} autoComplete={'off'}>
                  <span className="uk-search-icon" uk-icon="icon: search" />
                  <input className="uk-search-input border-radius40" id='search-input' type="text" placeholder="Search" />
                </form>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default Header;
