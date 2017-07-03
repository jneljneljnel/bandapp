import React, { Component } from 'react';
import '../App.css';
import { Nav, Navbar, NavItem, NavDropdown, Col, DropdownButton, MenuItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <a href="/index">Bandapp</a>
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
            <NavDropdown title='Settings' id='menu' id="basic-nav-dropdown">
              <MenuItem eventKey="1" ><Link to="/addShow">Add a show</Link></MenuItem>
              <MenuItem eventKey="2"><Link to="/addRehersal">Add a Rehersal</Link></MenuItem>
              <MenuItem eventKey="3">Calendar</MenuItem>
              <MenuItem eventKey="3">Merch Dashboard</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Socials</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
