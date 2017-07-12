import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';
import './Navigation.css';

import SearchCharacters from '../../containers/SearchCharacters'

class Navigation extends Component {

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={logo} className="App-logo" alt="logo" />
            Marvel Character Search
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <SearchCharacters />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;