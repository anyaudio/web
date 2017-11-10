import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

import '../header/static/css/header.css';

export default class Header extends React.Component {
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
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search"/>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar>
    )
  }
}
