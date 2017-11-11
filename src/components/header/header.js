import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

import '../header/static/css/header.css';

export default class Header extends React.Component {
  search() {
    const query = document.getElementById('search-input').value.replace(/^\s+|\s+$/g, '');  // Trailing whitespaces
    if (query.length === 0) {
      return
    }
    this.props.history.push('/search/' + query);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>[LOGO] </Link>
            <span className='hidden-sm hidden-xs'>
              <Link to='/'>AnyAudio</Link>
            </span>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft className='hidden-xs'>
          <FormGroup>
            <FormControl id='search-input' type="text" placeholder="Search"/>
          </FormGroup>
          <Button type="submit" onClick={this.search.bind(this)}>Submit</Button>
        </Navbar.Form>
      </Navbar>
    )
  }
}
