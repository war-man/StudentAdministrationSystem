﻿import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PrivacyPolicy from '../Components/PrivacyPolicy'

import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>Better Learning</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/schools'}>
          <NavItem>
            <Glyphicon glyph='education' /> Schools
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/students'}>
          <NavItem>
            <Glyphicon glyph='th-list' /> Students
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/profile'}>
          <NavItem>
            <Glyphicon glyph='user' /> Profile
          </NavItem>
        </LinkContainer>
        <PrivacyPolicy/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
