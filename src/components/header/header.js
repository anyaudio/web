import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../header/static/img/any_audio_logo.png';
import AndroidIcon from '../header/static/img/androild_icon.png';
import '../header/static/css/header.css'

export default class Header extends React.Component {
  componentDidMount() {
    let searchElement = document.getElementById('search-input');
    searchElement && searchElement
      .addEventListener('keyup', event => {
        event.preventDefault();
        if (event.keyCode === 13) {
          this.search();
        }
      });
  }

  search() {
    const searchElement = document.getElementById('search-input');
    const query = searchElement.value.replace(/^\s+|\s+$/g, '');  // Trailing whitespaces
    if (query.length === 0) {
      return
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
                <a className="uk-navbar-toggle" is uk-navbar-toggle-icon href="#"></a>
                <Link className="uk-navbar-item uk-logo" to='/'><img src={Logo} alt=""/></Link>
              </div>

              <div className="anyaudio-search-container uk-navbar-left uk-margin-large-left  uk-nav-center-sm">
                <form className="uk-search uk-search-default anyaudio-search" action="javascript:void(0)" type="submit" onSubmit={this.search.bind(this)}>

                  <span is className="uk-search-icon" uk-icon="icon: search"></span>
                  <input className="uk-search-input border-radius40" id='search-input' type="text" placeholder="Search" />
                </form>
              </div>

              <div className="uk-navbar-right uk-margin-large-left">
                <a className="border-radius40 uk-button uk-button-default uk-button-large app-download-btn">
                  <img src={AndroidIcon} alt="Android Icon"/>
                  <span className="uk-margin-small-left"> Download APP</span>
                 </a>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
